import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const PageContainer = styled.div`
  padding: 0 20px; /* Add padding on left and right to align with grid */
`;

export const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0 20px; /* Same padding for grid */
  list-style: none;
`;

export const ProductCard = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure cards have the same height */
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height */
  object-fit: cover; /* Ensures the image covers the space without distortion */
  border-radius: 4px;
`;

export const ProductTitle = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #444; /* Darker gray */
  margin: 10px 0; /* Keeps spacing consistent */
`;

export const ViewButton = styled.button`
  display: inline-block;
  margin-top: auto;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.8rem;

  /* Make text bigger on smaller screens */
  @media (max-width: 600px) {
    font-size: 0.9rem; /* Increase text size for smaller screens */
  }

  &:hover {
    background-color: #333;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 10px 10px 10px 35px; /* Add space on left for the icon */
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s;
  color: #444; /* Darker text */

  &::placeholder {
    color: #555; /* Darker placeholder text */
  }

  &:focus {
    border-color: #000;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%); /* Vertically center the icon */
  color: #444; /* Icon color */
`;
