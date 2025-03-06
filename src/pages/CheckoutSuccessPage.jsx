// pages/CheckoutSuccessPage.jsx

import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Layout from "../components/Layout"; // Import Layout
import { SuccessTitle, ThankYouMessage, BackToStoreButton } from "../components/styles/CheckoutSuccessPage.styles"; // Import styled components

function CheckoutSuccessPage() {
    const { clearCart } = useCart();

    // Clear the cart on checkout success, only run once when the page is loaded
    useEffect(() => {
        clearCart();
    }, [clearCart]);  // Add clearCart to the dependency array

    return (
        <Layout>
            <div style={{ textAlign: 'center' }}>
                <SuccessTitle>Order Successful!</SuccessTitle>
                <ThankYouMessage>Thank you for shopping with us!</ThankYouMessage>
                <Link to="/">
                    <BackToStoreButton>Go back to store</BackToStoreButton>
                </Link>
            </div>
        </Layout>
    );
}

export default CheckoutSuccessPage;
