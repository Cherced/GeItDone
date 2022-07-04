import React from 'react'
import {HeaderTodos} from '../components/molecules/HeaderTodos'
import { FilterSearch } from '../components/molecules/FilterSearch'
import { TodoList } from '../components/molecules/TodoList'
import {DoneList} from '../components/molecules/DoneList'
import { Modal } from '../components/atoms/Modal'
import { TodoForm } from '../components/atoms/TodoForm'
import { CreateTodoButton } from '../components/atoms/CreateTodoButton'
import { useTodoContext } from '../logic/TodoContext'
import {UserInfo} from "../components/molecules/UserInfo"
import { getSession } from 'next-auth/react'
import {useRouter} from 'next/router'
import { redirect } from 'next/dist/server/api-utils'
import {StatsGraph} from '../components/molecules/StatsGraph';
import {useGateContext} from '.././logic/GatesContext'

const Home = ({session}) => {  
  const {gateDone, gateStats, gateMain,} = useGateContext()
  const {setOpenModal, openModal} = useTodoContext() 
  const router = useRouter()

  return (
    <>
   <div className="HomeContainer">
     <UserInfo image={session.user.image} name={session.user.name} email={session.user.email} />
      <HeaderTodos />
      <FilterSearch/>
      {
          gateMain ? (<TodoList />) : 
          (
             (!gateDone && !gateStats ) ? (<DoneList />) : (<StatsGraph/>)
          )       
      }     
      {!!openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )}
      <CreateTodoButton
      setOpenModal={setOpenModal}
      />
  </div>
    </> 
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: "/login",
      permanent: false
    }
  }
  return {
    props : {
      session : session
    }
  }
} 

export default Home