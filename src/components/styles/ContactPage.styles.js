import styled from 'styled-components';

export const ContactWrapper = styled.section`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: 'Arial', sans-serif;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 2rem; /* Smaller margin-top on small screens */
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border 0.3s ease;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  min-height: 120px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #d9534f;
  font-size: 0.875rem;
  margin: 0;
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #333; /* Black */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555; /* Darker black for hover effect */
  }
`;

export const SuccessMessage = styled.p`
  text-align: center;
  color: #28a745;
  font-weight: bold;
  margin-top: 1rem;
`;
