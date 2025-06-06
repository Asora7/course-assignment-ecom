import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { fetchProducts } from '../data/api';
import * as S from '../components/styles/HomePage.styles';
import Product from '../components/Product';

/**
 * HomePage component fetches all products on mount, displays a search bar,
 * and shows a grid of filtered products as Product cards.
 *
 * @returns {JSX.Element} The homepage with search input and product grid.
 */
function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
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
      <S.PageContainer>
        <S.SearchWrapper>
          <S.SearchIcon size={20} />
          <S.SearchInput
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.SearchWrapper>
        {error && <p>Error: {error}</p>}

        <S.ProductGrid>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </S.ProductGrid>
      </S.PageContainer>
    </Layout>
  );
}

export default HomePage;
