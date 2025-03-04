// pages/CheckoutSuccessPage.jsx
import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  // Clear the cart on checkout success
  useEffect(() => {
    clearCart();
  }, [clearCart]);  // Only run when clearCart function changes

  return (
    <div>
      <h1>Order Successful!</h1>
      <Link to="/">Go back to store</Link>
    </div>
  );
}

export default CheckoutSuccessPage;
