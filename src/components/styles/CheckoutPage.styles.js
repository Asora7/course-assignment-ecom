// components/styles/CheckoutPage.styles.js

import styled from 'styled-components';

// Checkout page container (slightly taller with a bit more height)
export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;  // Increased to add a little more height
  padding: 1rem;  // Padding kept to ensure some space
  background-color: #f9f9f9;
  max-width: 500px;  // Reduced max-width of the overall container
  margin: 0 auto;  // Centered the container horizontally
  margin-top: 6rem;  // Added a bit of space from the top
  border: 1px solid #ddd;  // Adds a thin stroke with a light gray color
  border-radius: 8px;  // Optional: Adds rounded corners for a smoother look
`;

// Checkout page title (small margin)
export const CheckoutPageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;  // Reduced margin-bottom
  color: #333;
  text-align: center;
`;

// Product list (ul) with less vertical spacing
export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;  // Reduced margin-bottom
`;

// Checkout item card container (li) with smaller space
export const CheckoutItemCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 0.8rem;  // Keep padding consistent
  margin-bottom: 1rem;  // Spacing between cards
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  max-width: 500px;  // Match CartItemCard max-width
  box-sizing: border-box;  // Prevents extra width due to padding
`;

// Product Image for Checkout page
export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
`;

// Product details container for Checkout page
export const ProductDetails = styled.div`
  flex-grow: 1;
  margin-left: 1rem;  // Keep it for spacing between image and text
`;

// Product name for Checkout page
export const ProductTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;  // Reduced margin
`;

// Product price and quantity for Checkout page
export const ProductPriceQuantity = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

// Total price section - Shortened with less padding
export const TotalPriceSection = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  color: #333;
  text-align: center;
  max-width: 300px;  // Matches the width of the button
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;  // Added some space below
  align-self: center;  /* Ensure it's centered within the container */
`;

// Checkout button - More compact
export const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 0.8rem 1.5rem;  // Slightly smaller padding
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 500px;  // Matches the width of the total section
  align-self: center;

  &:hover {
    background-color: #218838;
  }
`;

export const EmptyCartMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export const GoBackButton = styled.button`
  background-color: #000;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;  // Matches the width of the total section
  align-self: center;

  &:hover {
    background-color: #333;
  }
`;
