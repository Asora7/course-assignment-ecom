import styled from 'styled-components';

export const SuccessTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #4caf50; // Green color for success
  text-align: center;
  margin-top: 8rem; // Reduced margin-top for positioning the title closer to the top
  margin-bottom: 1rem;
`;

export const ThankYouMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem; // Added space between the text and button
`;

export const BackToStoreButton = styled.button`
  background-color: #000;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 300px; // Ensuring button isn't too wide
  text-align: center;
  margin-top: 2rem;

  &:hover {
    background-color: #333;
  }
`;
