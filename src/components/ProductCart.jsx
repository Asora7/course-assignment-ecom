// components/ProductCart.jsx

import { useCart } from "../context/CartContext";
import { FaTrash } from 'react-icons/fa'; // Import Trash icon
import {
  CartItemCard,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPriceQuantity,
  RemoveButton,
  TotalPriceSection,
} from "../components/styles/CartPage.styles";

function ProductCart() {
  const { cart, removeFromCart } = useCart();

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
              ${item.discountedPrice} x {item.quantity}
            </ProductPriceQuantity>
          </ProductDetails>
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            <FaTrash /> {/* Show the trash icon */}
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
