import React from 'react'
import {useRouter} from 'next/router'
import {ChercedAnimation} from '../components/ChercedAnimation'
import {signIn, useSession} from 'next-auth/react'

const Login = () => {
  const [starter, setStarter] = React.useState(false)
  const [openLogin, setOpenLogin] = React.useState(true)

  const router =  useRouter()

  React.useEffect(() => {
    setTimeout(() => {
    setStarter(true);
    }, 5000);
  }, [])

  const {data: session, status} = useSession();

  if(status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  console.log(session)

  return (
      <>
      {
          starter ? ( 
              openLogin ? (
              <div className="entryContainer">
                  <div className="entryBrandContainer">
                  <img src="/images/brandLogo.png" arl="gsd"/>
                  <button onClick={()=> setOpenLogin(!openLogin)}>Start!</button>
                  </div>
              </div>               
              ) : (
                  <div className="LoginContainer">
                      <h1>Login</h1>
                      <div className="providersButtonContainer">
                        <button onClick={()=> signIn('google')}><img src="/images/google.png" alt="g"/></button>
                        <button onClick={()=> signIn('gitlab')}><img src="/images/instagram.png" alt="insta"/></button>
                        <button onClick={()=> signIn('facebook')}><img src="/images/linkedin.png" alt="linked"/></button>
                        <button onClick={()=> signIn('github')}><img src="/images/github.png" alt="github"/></button>
                      </div>
                  </div>
              )
          ) : (<ChercedAnimation />)
      }
      </>
  )
}

export default Login