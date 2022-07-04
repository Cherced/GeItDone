import React from 'react'
import { UserInfo } from '../components/molecules/UserInfo'
import {useSession} from 'next-auth/react'

const prubs = () => {
  const {data: session, status} = useSession()
console.log(session)
  return (
    <div className="prubsContainer">
     {/* <UserInfo image={session.user.image} name={session.user.name}/> */}
    </div>
  )
}

export default prubs
