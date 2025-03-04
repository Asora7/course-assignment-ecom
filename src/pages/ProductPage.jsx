// pages/ProductPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../data/api";
import { useCart } from "../context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discount = product.price - product.discountedPrice;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice} {discount > 0 && <span>({discount} off)</span>}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>

      {product.reviews && product.reviews.length > 0 && (
        <div>
          <h3>Reviews:</h3>
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
