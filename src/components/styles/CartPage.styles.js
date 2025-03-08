// components/styles/CartPage.styles.js

import styled from 'styled-components';

// Wrapper for the whole cart page (matching CheckoutPage container size)
export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;
  padding: 1rem;
  background-color: #f9f9f9;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 2rem;
  border: 1px solid #ddd;  // Adds a thin stroke with a light gray color
  border-radius: 8px;  // Optional: Adds rounded corners for a smoother look
`;

// Title of the Cart Page
export const CartPageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem; /* Increased margin-bottom for better spacing */
  color: #333;
  text-align: center;
`;

// Cart item card container (matching CheckoutItemCard spacing)
export const CartItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 0.8rem;
  margin-bottom: 1rem; /* Increased bottom margin for spacing */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
`;

// Product Image
export const ProductImage = styled.img`
  width: 70px;  /* Reduced width to match CheckoutPage product image */
  height: 70px;  /* Reduced height to match CheckoutPage product image */
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
  font-size: 1rem;  /* Reduced font size to match CheckoutPage */
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;  /* Reduced margin-bottom */
`;

// Product price and quantity
export const ProductPriceQuantity = styled.p`
  font-size: 0.9rem;  /* Reduced font size to match CheckoutPage */
  color: #666;
`;

export const QuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  margin-left: 10px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #ccc;
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

// Total Price Section (matching CheckoutPage TotalPriceSection)
export const TotalPriceSection = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  max-width: 300px;  /* Matches CheckoutPage total section */
  padding: 1rem;  /* Increased padding for better readability */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0 1.5rem 0;  /* Adjusted top/bottom margins to center section */
  align-self: center;  /* Ensure it's centered within the container */
`;

// Proceed to checkout button (matching CheckoutButton)
export const CheckoutButton = styled.button`
  background-color: #000;
  color: white;
  padding: 0.8rem 1.5rem;  /* Adjust the padding to make it more compact */
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 500px;  /* Match the width of CartItemCard and TotalPriceSection */
  margin: 2rem auto;  /* Center the button horizontally with top margin */
  
  &:hover {
    background-color: #333;
  }
`;