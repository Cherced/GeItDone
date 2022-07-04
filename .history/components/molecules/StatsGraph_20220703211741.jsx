import React from 'react'
import {ChartPolar} from '../atoms/ChartPolar'

export const StatsGraph = () => {
  return (
    <div className="StatsGraph--Container">
        <div className="mainContentPolar">
            <h1>analytics of your completed activities</h1>
        <ChartPolar/>
        </div>
    </div>
  )
}
