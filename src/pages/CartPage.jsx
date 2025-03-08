// pages/CartPage.jsx
import ProductCart from "../components/ProductCart"; // Use ProductCart for displaying cart items
import Layout from "../components/Layout"; // Import Layout
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import context hook to get cart and update functions
import {
  CartPageContainer,
  CartPageTitle,
  CheckoutButton,
} from "../components/styles/CartPage.styles";

function CartPage() {
  const { cart } = useCart(); // Get cart items from context
  const navigate = useNavigate();

  const getCartItemCount = () => {
    // Calculate the total number of items (sum of all quantities)
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Layout>
      <CartPageContainer>
        <CartPageTitle>Your Cart ({getCartItemCount()})</CartPageTitle>
        <ProductCart /> {/* Display cart items */}
        <CheckoutButton onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </CheckoutButton>
      </CartPageContainer>
    </Layout>
  );
}

export default CartPage;
