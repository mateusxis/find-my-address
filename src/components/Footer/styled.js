import styled from 'styled-components';

export const SFooter = styled.footer`
  display: flex;
  padding: 1rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const SLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;

  &:hover {
    color: #95a5a6;
  }
`;
