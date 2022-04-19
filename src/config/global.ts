import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        /* Fontes */
        --font: 'Poppins', sans-serif;
        --font-login-input: normal normal 400 0.8125rem/0.975rem 'Poppins', sans-serif;
        --font-login-label: normal normal 600 0.8125rem/0.975rem 'Poppins', sans-serif;

        /* Cor de fundo */
        --background-login: #FFFFFF;
        --background-login-input: #F9F9F9;
        --background-login-input-border: #E6E6E6;
        --background-login-button: #F54A48;

        /* Cor de texto */
        --color-title-login: #3C3C3C;
        --color-subtitle-login: #A2A2A2;
        --color-label-login: #7C7C7C;
    }
`;
