import React from 'react';
import {useTodoContext } from '../../logic/TodoContext/index'

export const TodoItem = (props) => {
    
  return (
    <div className="TodoItemContainer">
        <div className="todoItem--Check">
            <input type="checkbox" checked={props.completed} onChange={props.onComplete}/>
        </div>
        <div className="todoItem--Description">
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
        </div>
        <div className="todoItem--Delete">
            <button onClick={props.onDelete}> X </button>
        </div>
    </div>
  )
}
