import styled from 'styled-components';

export const SAlert = styled.label`
  display: block;
  text-align: center;
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
  background-color: #ffffff;

  @media (min-width: 601px) {
    font-size: 1.8rem;
  }

  @media (min-width: 961px) {
    font-size: 2.1rem;
  }
`;
