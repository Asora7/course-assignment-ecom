//pages/ProductPage.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../data/api";  // Use the new function
import { useCart } from "../context/CartContext";
import Layout from "../components/Layout"; // Import Layout

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        async function getProduct() {
            try {
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }

        getProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    const discount = product.price - product.discountedPrice;

    return (
        <Layout>  {/* Wrap with Layout */}
            <h1>{product.title}</h1>
            <img src={product.image.url} alt={product.image.alt} />
            <p>{product.description}</p>
            <p>Price: ${product.discountedPrice} {discount > 0 && <span>({discount} off)</span>}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>

            {product.reviews && product.reviews.length > 0 && (
                <div>
                    <h3>Reviews:</h3>
                    <ul>
                        {product.reviews.map((review) => (
                            <li key={review.id}>{review.username}: {review.description}</li>
                        ))}
                    </ul>
                </div>
            )}
        </Layout>
    );
}

export default ProductPage;
