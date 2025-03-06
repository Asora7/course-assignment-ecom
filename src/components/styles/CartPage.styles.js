//components/styles/CartPage.styles.js

import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

// Wrapper for the whole cart page
export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh; /* Ensures content is at the top but not pushed too far down */
  padding: 2rem;
  background-color: #f9f9f9; /* Light background color */
`;

// Title of the Cart Page
export const CartPageTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
  padding: 0 1rem;
`;

// Cart item card container
export const CartItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px; /* Limits the width for a neat layout */
`;

// Product Image
export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

// Product details container (Name, Price, Quantity)
export const ProductDetails = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`;

// Product name
export const ProductTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

// Product price and quantity
export const ProductPriceQuantity = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Remove button
export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #ff4d4f;
  
  &:hover {
    background-color: #f2f2f2;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// Total Price Section
export const TotalPriceSection = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem; /* Adjust this margin to bring it closer under the last card */
  margin-left: auto;
  margin-right: auto;
  color: #333;
  text-align: left;  /* Align total to the left */
  width: 100%;  /* Full width but will be controlled by the max-width */
  max-width: 700px;  /* Restrict it to the same max width as the product cards */
  padding-left: 1rem;  /* Add some left padding to align with the content */
`;

// Proceed to checkout button
export const CheckoutButton = styled.button`
  background-color: #000;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #333;
  }
  width: auto; /* Adjust width to auto */
  max-width: 700px; /* Ensures it doesn't stretch too much */
  align-self: center; /* Centers the button */
`;
