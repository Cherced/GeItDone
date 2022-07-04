import "../sass/main.scss";
import {TodoProvider} from "../logic/TodoContext/index";
import { SessionProvider } from "next-auth/react"

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