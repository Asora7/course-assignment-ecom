// components/CartIcon.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartIcon() {
  const { cart } = useCart();

  return (
    <div>
      <Link to="/cart">
        <span>Cart ({cart.length})</span>
      </Link>
    </div>
  );
}

export default CartIcon;
