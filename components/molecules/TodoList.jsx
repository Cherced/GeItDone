import React from 'react'
import { useTodoContext } from '../../logic/TodoContext'
import { TodoItem } from '../atoms/TodoItem'
import {TodosError} from '../atoms/TodoIcon/TodosError'
import {TodosLoading} from '../atoms/TodoIcon/TodosLoading'
import {EmptyTodos} from '../atoms/TodoIcon/EmptyTodos'


export const TodoList = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = useTodoContext()
  
  return (
    <div className="TodoListContainer">
    {error && <TodosError />}
    {loading && <TodosLoading />}
    {(!loading && !searchedTodos.length) && <EmptyTodos />}
      {
     searchedTodos.map(todo => (
      <TodoItem 
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
      />
      ))
      }
    </div>
  )
}
