import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const SInput = styled(InputMask)`
  display: block;
  margin: 0;
  padding: 0.8rem 1.6rem;
  color: inherit;
  width: 80%;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: inherit;
  line-height: 1.5;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  color: #455a64;

  &::placeholder {
    color: #b0bec5;
  }

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem #5e35b1;
  }

  @media (min-width: 601px) {
    font-size: 1.8rem;
    line-height: 1.8;
    width: 90%;
  }

  @media (min-width: 961px) {
    font-size: 2.1rem;
    line-height: 2.1;
    width: 100%;
  }
`;
