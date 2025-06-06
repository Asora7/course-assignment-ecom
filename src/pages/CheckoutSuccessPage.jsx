import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  SuccessTitle,
  ThankYouMessage,
  BackToStoreButton,
} from '../components/styles/CheckoutSuccessPage.styles';

/**
 * CheckoutSuccessPage component shows an order‐success message
 * and clears the cart when mounted.
 *
 * @returns {JSX.Element} A “thank you” message and a link back to the store.
 */
function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

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
