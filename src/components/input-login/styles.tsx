import styled from 'styled-components';
import pixelToRem from '../../config/pxToRem';

export const Inputi = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pixelToRem(6)};

    label{
        font: var(--font-login-label);
        color: var(--color-label-login);
    }
    input{
        font: var(--font-login-input);
        padding: ${pixelToRem(10)} ${pixelToRem(15)};
        background-color: var(--background-login-input);
        border: var(--background-login-input-border);
        border-radius: ${pixelToRem(3)};
    }
    ::placeholder{
        color: var(--color-input-login);
    }
`;