import { useCart } from "../context/CartContext";
import { CartLink } from "./styles/Header.styles";
import { FaShoppingCart } from 'react-icons/fa';
import { CartCount } from './styles/CartIcon.styles';

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
