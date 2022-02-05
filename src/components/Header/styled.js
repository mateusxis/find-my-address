import styled from 'styled-components';

export const SHeader = styled.header`
  margin-top: 30px;
`;

export const STitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  text-align: center;
  font-size: 2rem;
  color: #ffffff;

  @media (min-width: 601px) {
    font-size: 3rem;
  }

  @media (min-width: 961px) {
    font-size: 4rem;
  }
`;
