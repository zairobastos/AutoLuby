import { createGlobalStyle } from "styled-components";
import pixelToRem from "./pxToRem";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        /* Fontes */
        --font: 'Poppins', sans-serif;
        --font-login-input: normal normal 400 ${pixelToRem(13)}/${pixelToRem(
  13.6
)} 'Poppins', sans-serif;
        --font-login-label: normal normal 600 ${pixelToRem(14)}/${pixelToRem(
  16.8
)} 'Poppins', sans-serif;
        --font-login-logo: normal normal 600 ${pixelToRem(38)}/${pixelToRem(
  78.47
)} 'Poppins', sans-serif;
        --font-login-title-form: normal normal 600 ${pixelToRem(
          38
        )}/${pixelToRem(45.6)} 'Poppins', sans-serif;

        --font-login-subtitle-form: normal normal 600 ${pixelToRem(
          12
        )}/${pixelToRem(14.4)} 'Poppins', sans-serif;

        --font-login-cadastrar-form: normal normal 600 ${pixelToRem(
          14
        )}/${pixelToRem(16.8)} 'Poppins', sans-serif;

        --font-login-senha-form: var(--font-login-label);
        --font-login-button-form: var(--font-login-label);

        /* Cor de fundo */
        --background-login: #FFFFFF;
        --background-login-input: #F9F9F9;
        --background-login-input-border: ${pixelToRem(1)} solid #E6E6E6;
        --background-login-button: #F54A48;
        --background-login-check: var(--background-login-button);
        --background-home: var(--background-login);

        /* Cor de texto */
        --color-title-login: #3C3C3C;
        --color-subtitle-login: #A2A2A2;
        --color-label-login: #7C7C7C;
        --color-logo-login: var(--background-login-button);
        --color-input-login: var(--color-subtitle-login);
        --color-senha-login: var(--background-login-button);
        --color-cadastrar-login: var(--color-label-login);
    }
`;
