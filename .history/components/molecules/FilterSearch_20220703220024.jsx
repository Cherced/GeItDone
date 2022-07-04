import React from 'react'
import { SearchBar } from '../atoms/SearchBar'
import { ListFilter } from '../atoms/ListFilter'


export const FilterSearch = (props) => {
  return (
    <div className="FilterSearchContainer">
        <SearchBar />
        <ListFilter/>
    </div>
  )
}
