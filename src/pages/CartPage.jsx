// pages/CartPage.jsx
import ProductCart from "../components/ProductCart"; // Use ProductCart for displaying cart items
import Layout from "../components/Layout"; // Import Layout
import { useNavigate } from "react-router-dom";
import {
  CartPageContainer,
  CartPageTitle,
  CheckoutButton,
} from "../components/styles/CartPage.styles";

function CartPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <CartPageContainer>
        <CartPageTitle>Your Cart</CartPageTitle>
        <ProductCart /> {/* Display cart items */}
        <CheckoutButton onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </CheckoutButton>
      </CartPageContainer>
    </Layout>
  );
}

export default CartPage;
