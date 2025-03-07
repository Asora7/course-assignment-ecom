// components/CartIcon.jsx
import { useCart } from "../context/CartContext";
import { CartLink } from "./styles/Header.styles"; 
import { FaShoppingCart } from 'react-icons/fa';
import { CartCount } from './styles/CartIcon.styles';  // Importing from the new file

function CartIcon() {
    const { cart, recentlyAdded } = useCart();

    return (
        <div>
            <CartLink to="/cart">
                <FaShoppingCart style={{ marginRight: '0.5rem' }} />
                <span>Cart</span>
                <CartCount $hasItems={cart.length > 0} $animate={recentlyAdded}>
                    {cart.length}
                </CartCount>
            </CartLink>
        </div>
    );
}

export default CartIcon;
