import React from 'react'
import {ChercedAnimation} from '../components/ChercedAnimation'
const Login = () => {
  const [starter, setStarter] = React.useState(false)
  const [openLogin, setOpenLogin] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
    setStarter(true);
    }, 5000);
  }, [])

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
                        <button><img src="/images/google.png" alt="g"/></button>
                        <button><img src="/images/instagram.png" alt="insta"/></button>
                        <button><img src="/images/linkedin.png" alt="linked"/></button>
                        <button><img src="/images/github.png" alt="github"/></button>
                      </div>
                  </div>
              )
          ) : (<ChercedAnimation />)
      }
      </>
    
  )
}

export default Login