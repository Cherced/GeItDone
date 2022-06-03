import React from 'react'
import {HeaderTodos} from '../components/molecules/HeaderTodos'
import { FilterSearch } from '../components/molecules/FilterSearch'
import { TodoList } from '../components/molecules/TodoList'

const Home = () => {
  return (
    <div className="HomeContainer">
        <HeaderTodos />
        <FilterSearch />
        <TodoList />
    </div>
  )
}

export default Home