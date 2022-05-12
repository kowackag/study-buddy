import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
        /* margin: 0;
        padding: 0; */
    }

    body {
        max-height: 100vh;
        font-family: "Montserrat", Verdana, sans-serif;
        margin: 0;
        padding: 0;
    }

    button, a {
        font-family: "Montserrat", Verdana, sans-serif;
    }
`;

export default GlobalStyle;
