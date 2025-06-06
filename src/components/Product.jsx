import { Link } from 'react-router-dom';
import * as S from './styles/HomePage.styles';

/**
 * Product component displays a single product card, including its image,
 * title, discounted price, and a “View Product” button linking to its detail page.
 *
 * @param {{ product: { id: string; title: string; image?: { url: string; alt?: string }; discountedPrice: number } }} props
 *   - `product.id`: Unique identifier for the product.
 *   - `product.title`: The product’s title.
 *   - `product.image?.url`: (Optional) URL of the product’s image.
 *   - `product.image?.alt`: (Optional) Alt text for the product’s image.
 *   - `product.discountedPrice`: The current (discounted) price to display.
 * @returns {JSX.Element} A styled product card linking to `/product/{id}`.
 */
function Product({ product }) {
  return (
    <S.ProductCard>
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
  );
}

export default Product;
