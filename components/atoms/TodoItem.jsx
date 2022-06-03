import React from 'react'

export const TodoItem = () => {
  return (
    <div className="TodoItemContainer">
        <div className="todoItem--Check">
            <input type="checkbox" />
        </div>
        <div className="todoItem--Description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className="todoItem--Delete">
            <button className="btnX">
                X
            </button>
        </div>
    </div>
  )
}
