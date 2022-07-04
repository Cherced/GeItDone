import React from 'react'

export const UserInfo = () => {
  return (
    <header className="info-User-Container">
        <div>
            <img src={props.image} arl={props.name}/>
        </div>
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    </header>
  )
}
