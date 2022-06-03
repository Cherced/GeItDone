import React from 'react'

export const TodoCounter = () => {
  return (
    <div className="TodoCounterContainer">
        <div className="TodoCounter Up">
            <p>Completed</p>
            <h1>0</h1>
        </div>
        <div className="TodoCounter Down">
            <p>All</p>
            <h1>13</h1>
        </div>
    </div>
  )
}
