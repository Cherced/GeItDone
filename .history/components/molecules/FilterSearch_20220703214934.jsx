import React from 'react'
import { SearchBar } from '../atoms/SearchBar'
import { ListFilter } from '../atoms/ListFilter'
import {useGateContext} from '../../logic/GatesContext'

export const FilterSearch = (props) => {
  const {gateMain, setGateMain} = useGateContext()
  return (
    <div className="FilterSearchContainer">
        <SearchBar />
        <ListFilter switch={props.switch} gate={props.gate} />
    </div>
  )
}
