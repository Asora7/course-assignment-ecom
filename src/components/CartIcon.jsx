// components/CartIcon.jsx
import { useCart } from "../context/CartContext";
import { CartLink } from "./styles/Header.styles"; 
import { FaShoppingCart } from 'react-icons/fa';
import styled, { keyframes, css } from "styled-components";

// Bounce animation
const bounce = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const CartCount = styled.span`
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
  display: inline-block;
  background-color: ${({ hasItems }) => (hasItems ? "red" : "white")};
  color: ${({ hasItems }) => (hasItems ? "white" : "black")};
  border: ${({ hasItems }) => (hasItems ? "none" : "1px solid black")};
  
  ${({ animate }) =>
    animate &&
    css`
      animation: ${bounce} 0.5s ease;
    `}
`;

function CartIcon() {
    const { cart, recentlyAdded } = useCart();

    return (
        <div>
            <CartLink to="/cart">
                <FaShoppingCart style={{ marginRight: '0.5rem' }} />
                <span>Cart</span>
                <CartCount hasItems={cart.length > 0} animate={recentlyAdded}>
                    {cart.length}
                </CartCount>
            </CartLink>
        </div>
    );
}

export default CartIcon;
