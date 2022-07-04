import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const DoneList = () => {
    const {state} = useTodoContext()
    const completedTasks =  state.completedTasks
    const unCompletedTask = state.unCompletedTask
    console.log(state)
  return (
      <div className="List-Tasks-Container">
        <div className="Completed-taskList--Container">
            <h1>COMPLETED</h1>
        {
            completedTasks.map((task) => {
                return(
                    <div className="Task-BoxModel--Container">
                    <h1>{task.text}</h1>
                    </div>
                )               
            })
        } 
        </div>
        <div className="unCompleted-taskList--Container">
            <h1>INCOMPLETED</h1>
       {
            unCompletedTask.map((task) => {
                return(
                <div className="Task-BoxModel--Container">
                <h1>{task.text}</h1>
                </div>
                )                
            })
        }
        </div>
      </div>    
  )
}
