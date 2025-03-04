// pages/CartPage.jsx
import ProductCart from "../components/ProductCart"; // Use ProductCart for displaying cart items
import Layout from "../components/Layout"; // Import Layout

function CartPage() {
    return (
        <Layout> {/* Wrap with Layout */}
            <h1>Cart Page</h1>
            <ProductCart /> {/* Display cart items */}
        </Layout>
    );
}

export default CartPage;
