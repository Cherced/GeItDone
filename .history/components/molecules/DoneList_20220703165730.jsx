import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const DoneList = () => {
    const {state} = useTodoContext()
    console.log(state)
  return (
      <>
        <div className="Completed-taskList--Container">
       {/*  {
            completedTask.map((task) => {
                <div className="Task-BoxModel--Container">
                <h1>{props.title}</h1>
                </div>
            })
        } */}
        </div>
        <div className="unCompleted-taskList--Container">
       {/*  {
            unCompletedTask.map((task) => {
                <div className="Task-BoxModel--Container">
                <h1>{props.title}</h1>
                </div>
            })
        } */}
        </div>
      </>    
  )
}
