import styled from 'styled-components';

export const SColumn = styled.td`
  flex-basis: 100%;
  display: flex;
  padding: 10px 0;
  &:before {
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }

  @media (min-width: 961px) {
    &:before {
      content: '';
      flex-basis: 0%;
    }

    .col-1 {
      flex-basis: 40%;
    }

    .col-2 {
      flex-basis: 25%;
    }

    .col-3 {
      flex-basis: 25%;
    }

    .col-4 {
      flex-basis: 10%;
    }
  }
`;
