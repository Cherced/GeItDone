import React from 'react'
import { UserInfo } from '../components/molecules/UserInfo'
import {useSession} from 'next-auth/react'

const prubs = () => {
  const {data: session, status} = useSession()

  return (
    <div className="prubsContainer">
      <UserInfo image={session.image} name={session.name}/>
    </div>
  )
}

export default prubs
