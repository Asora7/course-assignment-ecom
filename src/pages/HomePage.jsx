//pages/HomePage.jsx

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { fetchProducts } from "../data/api";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data); // Now correctly an array
      } catch (err) {
        setError(err.message);
      }
    }
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
      />
      {error && <p>Error: {error}</p>}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img 
              src={product.image?.url} 
              alt={product.image?.alt || product.title} 
              width="100" // Temporary size, you can adjust later
            />
            {product.title} - ${product.discountedPrice}
            <Link to={`/product/${product.id}`}>View Product</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default HomePage;
