import "../sass/main.scss";
import {TodoProvider} from "../logic/TodoContext/index";
import {GateContextProvider} from "../logic/GatesContext"
import { SessionProvider } from "next-auth/react"


function myApp({Component, pageProps}) {
    return (
        
        <SessionProvider session={pageProps.session}>
            <GateContextProvider>
                        <TodoProvider>
                            <Component { ...pageProps } />
                         </TodoProvider>
            </GateContextProvider>     
        </SessionProvider>
    )
}

export default myApp