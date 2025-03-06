// pages/CheckoutPage.jsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
  CheckoutPageContainer,
  CheckoutPageTitle,
  ProductList,
  CheckoutItemCard,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPriceQuantity,
  TotalPriceSection,
  CheckoutButton,
} from "../components/styles/CheckoutPage.styles";

function CheckoutPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

  function handleCheckout() {
    // Clear the cart and navigate to checkout success
    navigate("/checkout-success");
  }

  return (
    <Layout>
      <CheckoutPageContainer>
        <CheckoutPageTitle>Checkout</CheckoutPageTitle>
        <ProductList>
          {cart.map((item) => (
            <CheckoutItemCard key={item.id}>
              <ProductImage 
                src={item.image?.url} 
                alt={item.image?.alt || item.title} 
              />
              <ProductDetails>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceQuantity>
                  ${item.discountedPrice} x {item.quantity}
                </ProductPriceQuantity>
              </ProductDetails>
            </CheckoutItemCard>
          ))}
        </ProductList>
        <TotalPriceSection>
          Total: ${total.toFixed(2)}
        </TotalPriceSection>
        <CheckoutButton onClick={handleCheckout}>
          Checkout
        </CheckoutButton>
      </CheckoutPageContainer>
    </Layout>
  );
}

export default CheckoutPage;
