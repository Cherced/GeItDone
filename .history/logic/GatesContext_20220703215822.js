import React from 'react'

const GateContext = React.createContext({});

export  function GateContextProvider({children}){
    const [gateDone, setGateDone] = React.useState(false)
    const [gateStats, setGateStats] = React.useState(false)
    const [gateMain, setGateMain] = React.useState(true)

    return(
        <GateContext.Provider value={
            {
                gateDone, setGateDone, gateStats, setGateStats, gateMain, setGateMain
            }
        }>
            {children}
        </GateContext.Provider>
    )
} 

export function useGateContext() { 
    const context = React.useContext(GateContext)
    return context
}