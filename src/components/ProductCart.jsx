// components/ProductCart.jsx

import { useCart } from "../context/CartContext";

function ProductCart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li key={item.id} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            {/* Product Image */}
            <img 
               src={item.image?.url}
               alt={item.image?.alt || item.title} 
               style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} 
            />
            {/* Product Details */}
            <div>
              <p>{item.title} - {item.quantity} x ${item.discountedPrice}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0).toFixed(2)}</p>
    </div>
  );
}

export default ProductCart;
