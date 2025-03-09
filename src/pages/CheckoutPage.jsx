import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
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
  EmptyCartMessage,
  GoBackButton,
} from '../components/styles/CheckoutPage.styles';

function CheckoutPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );
  const isCartEmpty = cart.length === 0;

  if (isCartEmpty) {
    return (
      <Layout>
        <CheckoutPageContainer>
          <EmptyCartMessage>
            Your cart is empty. Add items to proceed to checkout.
          </EmptyCartMessage>
          <GoBackButton onClick={() => navigate('/')}>
            Continue shopping
          </GoBackButton>
        </CheckoutPageContainer>
      </Layout>
    );
  }

  function handleCheckout() {
    const confirmCheckout = window.confirm(
      'Are you sure you want to place this order?'
    );
    if (confirmCheckout) {
      navigate('/checkout-success');
    }
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
        <TotalPriceSection>Total: ${total.toFixed(2)}</TotalPriceSection>
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      </CheckoutPageContainer>
    </Layout>
  );
}

export default CheckoutPage;
