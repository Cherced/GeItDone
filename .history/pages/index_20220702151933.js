import React from 'react'
import {HeaderTodos} from '../components/molecules/HeaderTodos'
import { FilterSearch } from '../components/molecules/FilterSearch'
import { TodoList } from '../components/molecules/TodoList'
import { Modal } from '../components/atoms/Modal'
import { TodoForm } from '../components/atoms/TodoForm'
import { CreateTodoButton } from '../components/atoms/CreateTodoButton'
import { useTodoContext } from '../logic/TodoContext'
import {ChercedAnimation} from '../components/ChercedAnimation'

const Home = () => {
  const [starter, setStarter] = React.useState(false);
  const {setOpenModal, openModal} = useTodoContext()

  React.useEffect(() => {
    setTimeout(() => {
    setStarter(true);
    }, 5000);
  }, [])

  return (
    <>
    {
      starter ? (<div className="HomeContainer">
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
  </div>) : (<ChercedAnimation />)
    }
    </> 
  )
}

export default Home