import "../sass/main.scss";
import {TodoProvider} from "../logic/TodoContext/index";

function myApp({Component, pageProps}) {
    return ( <TodoProvider>
                <Component { ...pageProps } />
            </TodoProvider>
    )
}

export default myApp