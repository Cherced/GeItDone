import React from 'react'
import {ChercedAnimation} from '../components/ChercedAnimation'
const Login = () => {
  const [starter, setStarter] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
    setStarter(true);
    }, 5000);
  }, [])

  return (
      <>
      {
          starter ? (
              openLogin ?
          <div className="LoginContainer">
          <img src="/images/brandLogo.png" arl="gsd"/>
          <button>Start!</button>
      </div>) : (<ChercedAnimation />)
      }
      </>
    
  )
}

export default Login