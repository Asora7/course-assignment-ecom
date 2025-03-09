import styled, { keyframes, css } from 'styled-components';

const bounce = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const CartCount = styled.span`
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
  display: inline-block;
  background-color: ${({ $hasItems }) => ($hasItems ? "red" : "white")};
  color: ${({ $hasItems }) => ($hasItems ? "white" : "black")};
  border: ${({ $hasItems }) => ($hasItems ? "none" : "1px solid black")};
  
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${bounce} 0.5s ease;
    `}
`;
