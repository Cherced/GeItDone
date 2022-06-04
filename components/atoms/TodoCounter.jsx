import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const TodoCounter = () => {
  const {completedTodos, totalTodos} = useTodoContext()
  
  return (
    <div className="TodoCounterContainer">
        <div className="TodoCounter Up">
            <p>Completed</p>
            <h1>{completedTodos}</h1>
        </div>
        <div className="TodoCounter Down">
            <p>All</p>
            <h1>{totalTodos}</h1>
        </div>
    </div>
  )
}
