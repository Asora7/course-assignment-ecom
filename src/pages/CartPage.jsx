import ProductCart from '../components/ProductCart';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  CartPageContainer,
  CartPageTitle,
  CheckoutButton,
} from '../components/styles/CartPage.styles';

/**
 * CartPage component displays the current cart items, total count, 
 * and a button to proceed to checkout.
 *
 * @returns {JSX.Element} A layout wrapping cart contents and checkout button.
 */
function CartPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  /**
   * Calculates the total number of items in the cart.
   *
   * @returns {number} The sum of all item quantities in the cart.
   */
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Layout>
      <CartPageContainer>
        <CartPageTitle>Your Cart ({getCartItemCount()})</CartPageTitle>
        <ProductCart />
        <CheckoutButton onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </CheckoutButton>
      </CartPageContainer>
    </Layout>
  );
}

export default CartPage;
