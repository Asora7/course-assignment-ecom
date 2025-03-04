// pages/CheckoutSuccessPage.jsx
import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Layout from "../components/Layout"; // Import Layout

function CheckoutSuccessPage() {
    const { clearCart } = useCart();

    // Clear the cart on checkout success
    useEffect(() => {
        clearCart();
    }, [clearCart]);  // Only run when clearCart function changes

    return (
        <Layout> {/* Wrap with Layout */}
            <h1>Order Successful!</h1>
            <Link to="/">Go back to store</Link>
        </Layout>
    );
}

export default CheckoutSuccessPage;
