import React from 'react'

export const UserInfo = (props) => {
  return (
    <header className="info-User-Container">
      <div>
        <div className="ImageUser--Container">
            <img src={props.image} arl={props.name}/>
        </div>
        <div className="metaData-User--Container">
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
        <button>
          <img src="" alt=""/>
        </button>
      </div>
    </header>
  )
}
