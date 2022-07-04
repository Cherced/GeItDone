import React from 'react'
import {useGateContext} from '../../logic/GatesContext'

export const ListFilter = () => {
  const {gateSlave, setGateSlave, gateMain, setGateMain} = useGateContext()

  const openDoneContent= () =>{
    if(gateMain && gateSlave){
      setGateMain(!gateMain)
      setGateSlave(gateSlave)
    } else if (!gateMain && gateSlave) {
      setGateMain(!gateMain)
      setGateSlave(gateSlave)
    } else if (gateMain && !gateSlave){
      setGateMain(gateMain)
      setGateSlave(!gateSlave)
    } else if (!gateMain && !gateSlave) {
      setGateMain(!gateMain)
      setGateSlave(!gateSlave)
    }
  }

  
  const openStatsContent= () =>{
    if(!gateMain && gateSlave) {
      setGateMain(!gateMain)
      setGateSlave(gateSlave)
    } else if (gateMain && gateSlave) {
      setGateMain(!gateMain)
      setGateSlave(!gateSlave)
    } else if (!gateMain && !gateSlave) {
      setGateMain(!gateMain)
      setGateSlave(!gateSlave)
    }
  }

  return (
    <div className="ListFilterConteiner">
        <button onClick={()=> openDoneContent()} className="buttonOption done" type="button"><h1>DONE</h1></button>
        <button onClick={()=> openStatsContent()}className="buttonOption stats" type="button"><h1>STATS</h1></button>
    </div>
  )
}
