import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import {
  CartItemCard,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPriceQuantity,
  RemoveButton,
  TotalPriceSection,
  QuantityInput,
} from '../components/styles/CartPage.styles';

/**
 * ProductCart component renders all items currently in the cart,
 * allows quantity updates, and shows the total price at the bottom.
 *
 * It fetches `cart`, `removeFromCart`, and `updateQuantity` from CartContext.
 *
 * @returns {JSX.Element} A list of cart item cards with images, titles,
 *   quantity inputs, remove buttons, and a total price section.
 */
function ProductCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div>
      {cart.map((item) => (
        <CartItemCard key={item.id}>
          <ProductImage
            src={item.image?.url}
            alt={item.image?.alt || item.title}
          />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPriceQuantity>
              ${item.discountedPrice} x
              <QuantityInput
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value, 10))
                }
                min="1"
              />
            </ProductPriceQuantity>
          </ProductDetails>
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            <FaTrash />
          </RemoveButton>
        </CartItemCard>
      ))}
      <TotalPriceSection>
        Total: $
        {cart
          .reduce(
            (total, item) => total + item.discountedPrice * item.quantity,
            0
          )
          .toFixed(2)}
      </TotalPriceSection>
    </div>
  );
}

export default ProductCart;
