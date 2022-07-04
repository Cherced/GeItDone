import "../sass/main.scss";
import {TodoProvider} from "../logic/TodoContext/index";
import { Provider as AuthProvider } from 'next-auth/client';

function myApp({Component, pageProps}) {
    return (
        <AuthProvider session={pageProps.session}>     
            <TodoProvider>
                <Component { ...pageProps } />
            </TodoProvider>
        </AuthProvider>
    )
}

export default myApp