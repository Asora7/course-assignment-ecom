import ProductCart from "../components/ProductCart"; 
import Layout from "../components/Layout"; 
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import {
  CartPageContainer,
  CartPageTitle,
  CheckoutButton,
} from "../components/styles/CartPage.styles";

function CartPage() {
  const { cart } = useCart(); 
  const navigate = useNavigate();

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Layout>
      <CartPageContainer>
        <CartPageTitle>Your Cart ({getCartItemCount()})</CartPageTitle>
        <ProductCart /> 
        <CheckoutButton onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </CheckoutButton>
      </CartPageContainer>
    </Layout>
  );
}

export default CartPage;
