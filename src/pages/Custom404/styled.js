import styled from 'styled-components';

export const SSection = styled.section`
  display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0 20px;
}
`;

export const STitle = styled.h1`
  margin: 30px 0;
  line-height: 1.15;
  text-align: center;
  font-size: 2rem;
  color: #ffffff;

  @media (min-width: 601px) {
    font-size: 3rem;
    margin: 40px;
  }

  @media (min-width: 961px) {
    margin: 50px;
    font-size: 4rem;
  }
`;

export const SLink = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  font-size: 1rem;
  color: #ffffff;
  margin: 20px 0;

  &:hover {
    color: #95a5a6;
  }

  @media (min-width: 601px) {
    font-size: 1.5rem;
    margin: 30px;
  }

  @media (min-width: 961px) {
    margin: 40px;
    font-size: 2rem;
  }
`;
