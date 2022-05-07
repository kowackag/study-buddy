import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    html {
        max-width:100vw;
        font-size: 10px;
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        max-width: 1000px;
        width:100%;
        margin: auto;
        font-family: "Montserrat", Verdana, sans-serif;
        font-size: 1.6rem;
        color: rgb(var(--color-alfa));
        line-height:1.5;
    }

    button, a {
        font-family: "Montserrat", Verdana, sans-serif;
    }
`;

export default GlobalStyle;
