import React from 'react'

export const ListFilter = (props) => {
  return (
    <div className="ListFilterConteiner">
        <button onClick={()=> props.switch(!props.gate)} className="buttonOption done" type="button"><h1>DONE</h1></button>
        <button className="buttonOption stats" type="button"><h1>STATS</h1></button>
    </div>
  )
}
