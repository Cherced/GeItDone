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
              <img src="/images/brandLogo.png" arl="gsd"/>
              <button className={()=> setOpenLogin(!openLogin)}>Start!</button>
              </div>               
              ) : (
                  <div className="LoginContainer">
                      <div className="providersButtonContainer">
                        <button><img src="" alt=""/></button>
                        <button><img src="" alt=""/></button>
                        <button><img src="" alt=""/></button>
                        <button><img src="" alt=""/></button>
                      </div>
                  </div>
              )
          ) : (<ChercedAnimation />)
      }
      </>
    
  )
}

export default Login