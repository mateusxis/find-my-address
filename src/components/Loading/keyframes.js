import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const appear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;
