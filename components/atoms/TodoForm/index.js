import React from 'react';
import {useTodoContext} from '../../../logic/TodoContext';


function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = useTodoContext();
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Create a new TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
