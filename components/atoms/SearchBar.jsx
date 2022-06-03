import React from 'react'

export const SearchBar = () => {
  return (
    <div className="SearchBarContainer">
        <div className="SearchBar">
            <input type="text" placeholder="Search" />
        </div>
        <div className="SearchBarIcon">
        <img src="/images/lupa.png" alt="lupa"/>
        </div>
    </div>
  )
}
