import React from 'react'
import {useGateContext} from '../../logic/GatesContext'

export const ListFilter = (props) => {
  const {gateDone, setGateDone, gateStats, setGateStats, gateMain, setGateMain} = useGateContext()

  const openDoneContent= () =>{
    setGateMain(!gateMain)
    setGateDone(!gateDone)
  }

  
  const openStatsContent= () =>{
    setGateMain(!gateMain)
    setGateDone(gateDone)
  }

  return (
    <div className="ListFilterConteiner">
        <button onClick={()=> openDoneContent()} className="buttonOption done" type="button"><h1>DONE</h1></button>
        <button onClick={()=> openStatsContent()}className="buttonOption stats" type="button"><h1>STATS</h1></button>
    </div>
  )
}
