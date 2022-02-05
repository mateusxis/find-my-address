import styled from 'styled-components';

export const SRow = styled.tr`
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 15px 20px;
  justify-content: space-between;
  display: block;
  margin-bottom: 25px;

  @media (min-width: 961px) {
    display: flex;
  }
`;
