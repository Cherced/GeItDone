import React from 'react'
import {useTodoContext} from '../../logic/TodoContext/index'

export const DoneList = () => {
    const [listGate, setListGate] = React.useState(false)
    const {state} = useTodoContext()
    const completedTasks =  state.completedTasks
    const unCompletedTask = state.unCompletedTask
    console.log(completedTasks.length)

    React.useEffect(()=>{
        if((completedTasks.length <= 0) && (unCompletedTask.length <= 0)){
            setListGate(true)
        } else {
            setListGate(false)
        }
    })
   
  return (
      <>
      {
          listGate ? (
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
          ) : (
              <>
               <h1 className="titleNoFinish">END YOUR TODOS FIRTS, AND COME BACK!</h1>
                <div className="AnimationLoading">
                <div className="containerLo">
                <p className="LoadingTodo-text">UPS...</p>
                <div className="loaderLo" />
                </div>
                </div>    
              </>
            ) 
      }
      </>
      
  )
}
