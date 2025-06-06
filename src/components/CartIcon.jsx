import { useCart } from '../context/CartContext';
import { CartLink } from './styles/Header.styles';
import { FaShoppingCart } from 'react-icons/fa';
import { CartCount } from './styles/CartIcon.styles';

/**
 * CartIcon component renders a link to the cart page with a shopping cart icon
 * and a badge showing the total number of items currently in the cart.
 *
 * @returns {JSX.Element} A link to "/cart" containing the cart icon, label, and item count badge.
 */
function CartIcon() {
  const { cart, recentlyAdded } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <CartLink to="/cart">
        <FaShoppingCart style={{ marginRight: '0.5rem' }} />
        <span>Cart</span>
        <CartCount $hasItems={totalItems > 0} $animate={recentlyAdded}>
          {totalItems}
        </CartCount>
      </CartLink>
    </div>
  );
}

export default CartIcon;
