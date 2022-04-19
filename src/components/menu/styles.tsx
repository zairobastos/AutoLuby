import styled from 'styled-components';
import pixelToRem from '../../config/pxToRem';

export const Menur = styled.header`
    width: 100%;
    display: flex;
    gap: ${pixelToRem(22.81)};
    align-items: center;

    h2 {
      font: var(--font-login-logo);
      color: var(--color-logo-login);
    }
`;