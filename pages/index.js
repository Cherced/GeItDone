import React from 'react'
import {HeaderTodos} from '../components/molecules/HeaderTodos'
import { FilterSearch } from '../components/molecules/FilterSearch'
import { TodoList } from '../components/molecules/TodoList'
import { Modal } from '../components/atoms/Modal'
import { TodoForm } from '../components/atoms/TodoForm'

const Home = () => {
  return (
    <div className="HomeContainer">
        <HeaderTodos />
        <FilterSearch />
        <TodoList />
        <Modal>
          <TodoForm />
        </Modal>
    </div>
  )
}

export default Home