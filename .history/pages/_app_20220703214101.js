import "../sass/main.scss";
import {TodoProvider} from "../logic/TodoContext/index";
import { SessionProvider } from "next-auth/react"
import {GateContextProvider} from "../logic/GatesContext"

function myApp({Component, pageProps}) {
    return (
        <SessionProvider session={pageProps.session}>     
            <TodoProvider>
                <Component { ...pageProps } />
            </TodoProvider>
        </SessionProvider>
    )
}

export default myApp