import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { fetchProducts } from "../data/api";

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
            {product.title} - ${product.discountedPrice}
            <a href={`/product/${product.id}`}>View Product</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default HomePage;
