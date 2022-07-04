import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

export function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

   const initialState={
     completedTasks: [],
     unCompletedTask: []
   }; 

   
const usersActives = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK_DONE':
      return {
        ...state,
        completedTasks: [...state.completedTasks, action.payload]
      } 
    case 'ADD_TASK_UNDONE':
      return {
        ...state,
        unCompletedTask: [...state.unCompletedTask, action.payload]
      }
    default:
      return state
  }
}


const [state, dispatch] = React.useReducer(usersActives, initialState);

const handleClickTaskDone = (task) => {
  dispatch({type: 'ADD_TASK_DONE', payload: task})
} 

const handleClickTaskUnDone = (task) => {
  dispatch({type: 'ADD_TASK_UNDONE', payload: task})
} 




  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    debugger
    todos.map((todo)=>{
      if (todo.completed === true) {
        
        handleClickTaskDone(todo.text)
      } else {
        handleClickTaskUnDone(todo.text)
      }
    })
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  console.log("tareas hechas  ", initialState.completedTasks, "tareas no hechas  ", initialState.unCompletedTask )
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = React.useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}
