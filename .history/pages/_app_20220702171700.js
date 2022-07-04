import "../sass/main.scss";
import {TodoProvider} from "../logic/TodoContext/index";
import { Provider as AuthProvider } from 'next-auth/client'

function myApp({Component, pageProps}) {
    return ( <TodoProvider>
                <Component { ...pageProps } />
            </TodoProvider>
    )
}

export default myApp