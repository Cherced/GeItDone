import React from 'react'
import { useTodoContext } from '../../logic/TodoContext/index';

export const SearchBar = () => {
  const {searchValue, setSearchValue} = useTodoContext();

const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="SearchBarContainer">
        <div className="SearchBar">
            <input value={searchValue} placeholder="Search" onChange={onSearchValueChange}/>
        </div>
        <div className="SearchBarIcon">
        <img src="/images/lupa.png" alt="lupa"/>
        </div>
    </div>
  )
}
