// pages/CheckoutPage.jsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // for navigation

function CheckoutPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

  function handleCheckout() {
    // Clear the cart and navigate to checkout success
    navigate("/checkout-success");
  }

  return (
    <div>
      <h1>Checkout Page</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} x ${item.discountedPrice}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CheckoutPage;
