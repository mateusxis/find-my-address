import styled from 'styled-components';

export const SButton = styled.button`
  border: 0px;
  color: rgb(66, 66, 66);
  background-color: rgb(126, 194, 68);
  width: 80%;
  height: 62px;
  border-radius: 0.4rem;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &::placeholder {
    color: #bdbdbd;
    text-transform: uppercase;
  }
  
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem #5e35b1;c
  }
  
  @media (min-width: 601px) {
    margin-left: 1.6rem;
    margin-top: 0;
    font-size: 1.2rem;
    line-height: 1.2rem;
    height: 78px;
  }

  @media (min-width: 961px) {
    font-size: 1.6rem;
    line-height: 1.6rem;
    height: 100px;
    width: 300px;
  }
`;
