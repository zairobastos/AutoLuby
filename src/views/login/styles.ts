import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const LoginG = styled.div`
  width: 100%;
  display: flex;

  .login-carro {
    width: 50%;
    position: fixed;
    right: 0;
    height: 100vh;

    .carro {
      width: 100%;
    }
  }
`;

export const TelaLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  header {
    display: flex;
    gap: ${pixelToRem(22.81)};
    align-items: center;
    margin: ${pixelToRem(70)} 0 0 17%;

    h2 {
      font: var(--font-login-logo);
      color: var(--color-logo-login);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 66%;
    margin: ${pixelToRem(178)} 17% 0 17%;
    h1 {
      font: var(--font-login-title-form);
      color: var(--color-title-login);
      margin-bottom: ${pixelToRem(6)};
    }
    p {
      font: var(--font-login-subtitle-form);
      color: var(--color-subtitle-login);
      margin-bottom: ${pixelToRem(70)};
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: ${pixelToRem(30)};
    }

    .senha {
      display: flex;
      margin-top: ${pixelToRem(30)};
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: ${pixelToRem(50)};
      input {
        width: ${pixelToRem(24)};
        height: ${pixelToRem(24)};
        accent-color: var(--background-login-check);
      }

      .lembrar {
        display: flex;
        height: 100%;
        align-items: center;
        gap: ${pixelToRem(10)};
      }
      label,
      p {
        font: var(--font-login-senha-form);
        color: var(--color-senha-login);
        margin-bottom: ${pixelToRem(0)};
      }
    }
    button {
      padding: ${pixelToRem(10)} 0;
      background-color: var(--background-login-button);
      border: none;
      color: var(--background-login);
      font: var(--font-login-button-form);
      border-radius: ${pixelToRem(3)};
    }

    h4 {
      font: var(--font-login-cadastrar-form);
      margin: ${pixelToRem(40)} 0;
      color: var(--color-cadastrar-login);

      span {
        color: var(--background-login-button);
      }
    }
  }
`;
