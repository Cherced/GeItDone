import React from 'react'

const GateContext = React.createContext({});

export  function GateContextProvider({children}){
    const [gateDone, setGateDone] = React.useState(true)
    const [gateMain, setGateMain] = React.useState(true)

    return(
        <GateContext.Provider value={
            {
                gateDone, setGateDone, gateMain, setGateMain
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