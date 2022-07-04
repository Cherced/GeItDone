import React from 'react'
import {useGateContext} from '../../logic/GatesContext'

export const ListFilter = () => {
  const {gateDone, setGateDone, gateStats, setGateStats, gateMain, setGateMain} = useGateContext()

  console.log(gateMain, "main deafuera", gateDone, "done deafuera")

  const openDoneContent= () =>{
    if(gateMain && gateDone){
      setGateMain(!gateMain)
      setGateDone(gateDone)
    } else if (!gateMain && gateDone) {
      setGateMain(!gateMain)
      setGateDone(gateDone)
    } else if (!gateMain && !gateDone){
      setGateMain(!gateMain)
      setGateDone(gateDone)
    }

    
    console.log(gateMain, "main", gateDone, "done desde Done")
  }

  
  const openStatsContent= () =>{
      setGateMain(!gateMain)
      setGateDone(!gateDone)
      console.log(gateMain, "main", gateDone, "done desde STATS")
  }

  return (
    <div className="ListFilterConteiner">
        <button onClick={()=> openDoneContent()} className="buttonOption done" type="button"><h1>DONE</h1></button>
        <button onClick={()=> openStatsContent()}className="buttonOption stats" type="button"><h1>STATS</h1></button>
    </div>
  )
}
