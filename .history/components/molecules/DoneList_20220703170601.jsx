import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const DoneList = () => {
    const {state} = useTodoContext()
    const completedTasks =  state.completedTasks
    const unCompletedTask = state.unCompletedTask
    console.log(state)
    console.log(typeof completedTasks, completedTasks)
  return (
      <>
        <div className="Completed-taskList--Container">
        {
            completedTasks.map((task) => {
                <div className="Task-BoxModel--Container">
                <h1>{task}</h1>
                </div>
            })
        } 
        </div>
        <div className="unCompleted-taskList--Container">
       {
            unCompletedTask.map((task) => {
                <div className="Task-BoxModel--Container">
                <h1>{task}</h1>
                </div>
            })
        }
        </div>
      </>    
  )
}
