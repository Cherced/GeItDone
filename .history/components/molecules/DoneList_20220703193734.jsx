import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const DoneList = () => {
    const {state} = useTodoContext()
    const completedTasks =  state.completedTasks
    const unCompletedTask = state.unCompletedTask
   
  return (
      <div className="List-Tasks-Container">
          <div className="TaskContainer">
           <h1 className="completed">COMPLETED</h1>
        <nav className="Completed-taskList--Container">
            <ul>
           
        {
            completedTasks.map((task) => {
                return(
                    <li>{task.text}</li>
                )               
            })
        } 
            </ul>
        </nav>
        </div>
        <div className="TaskContainer">
        <h1 className="incompleted">INCOMPLETED</h1>
        <nav className="unCompleted-taskList--Container">
            <ul>
        {
            unCompletedTask.map((task) => {
                return(
                <li>{task.text}</li>
                )                
            })
        }
            </ul>
        </nav>
        </div>          
      </div>    
  )
}
