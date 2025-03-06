// src/components/styles/HomePage.styles.js
import styled from 'styled-components';

export const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
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
  margin-top: auto; /* Pushes the button to the bottom */
  padding: 10px 20px;
  background-color: #000; /* Black button */
  color: #fff; /* White text */
  text-decoration: none;
  border-radius: 4px;
  border: none; /* Remove default button border */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; /* Slightly lighter black on hover */
  }
`;

