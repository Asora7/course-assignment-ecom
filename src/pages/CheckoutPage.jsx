// pages/CheckoutPage.jsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

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
            <h1>Checkout Page</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {cart.map((item) => (
                    <li 
                        key={item.id} 
                        style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}
                    >
                        {/* Product Image */}
                        <img 
                            src={item.image?.url} 
                            alt={item.image?.alt || item.title} 
                            style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                        />
                        {/* Product Details */}
                        <div>
                            <p>{item.title} - {item.quantity} x ${item.discountedPrice.toFixed(2)}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </Layout>
    );
}

export default CheckoutPage;
