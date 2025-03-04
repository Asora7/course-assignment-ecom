// pages/CartPage.jsx
import ProductCart from "../components/ProductCart"; // Use ProductCart for displaying cart items
import Layout from "../components/Layout"; // Import Layout
import { useNavigate } from "react-router-dom";

function CartPage() {
    const navigate = useNavigate();

    return (
        <Layout> {/* Wrap with Layout */}
            <h1>Cart Page</h1>
            <ProductCart /> {/* Display cart items */}
            <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </Layout>
    );
}

export default CartPage;
