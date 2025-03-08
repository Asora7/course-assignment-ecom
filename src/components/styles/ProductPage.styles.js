//styles/ProductPage.style.js
import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const ProductTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;  // Slightly softer than pure black
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;  // Slightly darker than default grey, but not pure black
  margin-bottom: 1.5rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  margin: 15px 0;
`;

export const DiscountText = styled.span`
  font-size: 1rem;
  color: #d9534f;  /* red */
  margin-left: 10px;
  font-weight: normal;
`;

export const AddToCartButton = styled.button`
  padding: 12px 25px;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

export const ContinueShoppingButton = styled.button`
  padding: 12px 25px;
  background-color: #fff; /* White background */
  color: #000; /* Black text */
  font-size: 1rem;
  border: 2px solid #000; /* Black border */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #e0e0e0; /* Light grey background on hover */
    border-color: #444; /* Slightly darker border on hover */
  }
`;

export const ReviewsSection = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 800px;
`;

export const ReviewTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;

  & strong {
    color: #000;
    font-weight: bold;
  }
`;

