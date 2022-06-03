import "../sass/main.scss";
function myApp({Component, pageProps}) {
    return ( <
        Component {
            ...pageProps
        }
        />
    )
}

export default myApp