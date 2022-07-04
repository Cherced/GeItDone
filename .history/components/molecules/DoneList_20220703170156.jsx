import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const DoneList = () => {
    const {state} = useTodoContext()
    const completedTasks =  state.completedTasks
    const unCompletedTask = state.unCompletedTask
    console.log(state)
  return (
      <>
        <div className="Completed-taskList--Container">
        {
            state.completedTasks.map((task) => {
                <div className="Task-BoxModel--Container">
                <h1>{task}</h1>
                </div>
            })
        } 
        </div>
        <div className="unCompleted-taskList--Container">
       {
            state.unCompletedTask.map((task) => {
                <div className="Task-BoxModel--Container">
                <h1>{task}</h1>
                </div>
            })
        }
        </div>
      </>    
  )
}
