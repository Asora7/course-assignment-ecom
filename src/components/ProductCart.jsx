// components/ProductCart.jsx
import { useCart } from "../context/CartContext";

function ProductCart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.title} - {item.quantity} x ${item.discountedPrice}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)}</p>
    </div>
  );
}

export default ProductCart;
