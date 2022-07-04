import React from 'react'
import {useGateContext} from '../../logic/GatesContext'

export const ListFilter = () => {
  const {gateSlave, setGateSlave, gateMain, setGateMain} = useGateContext()

  console.log(gateMain, "main deafuera", gateSlave, "done deafuera")

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

    
    console.log(gateMain, "main", gateSlave, "done desde Done")
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
      
      console.log(gateMain, "main", gateSlave, "done desde STATS")
  }

  return (
    <div className="ListFilterConteiner">
        <button onClick={()=> openDoneContent()} className="buttonOption done" type="button"><h1>DONE</h1></button>
        <button onClick={()=> openStatsContent()}className="buttonOption stats" type="button"><h1>STATS</h1></button>
    </div>
  )
}
