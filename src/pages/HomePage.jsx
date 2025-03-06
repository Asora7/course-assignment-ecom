//pages/HomePage.jsx

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { fetchProducts } from "../data/api";
import { Link } from "react-router-dom";  // Keep Link here
import * as S from "../components/styles/HomePage.styles"; // Import styled components

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
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
      />
      {error && <p>Error: {error}</p>}
      
      {/* Product grid */}
      <S.ProductGrid>
        {filteredProducts.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage 
              src={product.image?.url} 
              alt={product.image?.alt || product.title} 
            />
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ProductPrice>${product.discountedPrice}</S.ProductPrice>
            <Link to={`/product/${product.id}`}>
              <S.ViewButton>View Product</S.ViewButton>
            </Link>
          </S.ProductCard>
        ))}
      </S.ProductGrid>
    </Layout>
  );
}

export default HomePage;
