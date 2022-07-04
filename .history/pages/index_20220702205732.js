import React from 'react'
import {HeaderTodos} from '../components/molecules/HeaderTodos'
import { FilterSearch } from '../components/molecules/FilterSearch'
import { TodoList } from '../components/molecules/TodoList'
import { Modal } from '../components/atoms/Modal'
import { TodoForm } from '../components/atoms/TodoForm'
import { CreateTodoButton } from '../components/atoms/CreateTodoButton'
import { useTodoContext } from '../logic/TodoContext'
import { getSession } from 'next-auth/react'
import {useRouter} from 'next/router'

const Home = () => {  
  const {setOpenModal, openModal} = useTodoContext() 
  const router = useRouter()

  return (
    <>
   <div className="HomeContainer">
      <HeaderTodos />
      <FilterSearch />
      <TodoList />
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
  const session = await getSession()
  return {
    props 
  }
} 

export default Home