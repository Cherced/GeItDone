import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const DoneList = () => {
    const {state} = useTodoContext()
    const completedTasks =  state.completedTasks
    const unCompletedTask = state.unCompletedTask
    console.log(state)
  return (
      <div className="List-Tasks-Container">
           <h1>COMPLETED</h1>
        <nav className="Completed-taskList--Container">
           
        {
            completedTasks.map((task) => {
                return(
                    <li>{task.text}</li>
                )               
            })
        } 
        </nav>
        <div>
        <h1>INCOMPLETED</h1>
        <nav className="unCompleted-taskList--Container">
        {
            unCompletedTask.map((task) => {
                return(
                <li>{task.text}</li>
                )                
            })
        }
        </nav>
        </div>          
      </div>    
  )
}
