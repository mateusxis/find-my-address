import styled from 'styled-components';

export const SForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SSection = styled.section`
  align-items: center;
  display: flex;
  margin: 30px 0;
  flex-direction: column;

  @media (min-width: 601px) {
    margin: 40px 0;
    flex-direction: row;
  }

  @media (min-width: 961px) {
    margin: 50px 0;
    flex-direction: row;
  }
`;
