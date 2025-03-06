// components/CartIcon.jsx
import { useCart } from "../context/CartContext";
import { CartLink } from "./styles/Header.styles"; // Import the CartLink styled component
import { FaShoppingCart } from 'react-icons/fa'; // Import a cart icon from react-icons

function CartIcon() {
  const { cart } = useCart();

  return (
    <div>
      <CartLink to="/cart">
        <FaShoppingCart style={{ marginRight: '0.5rem' }} /> {/* Displaying cart icon */}
        <span>Cart ({cart.length})</span>
      </CartLink>
    </div>
  );
}

export default CartIcon;
