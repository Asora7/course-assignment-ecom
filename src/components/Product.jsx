import { Link } from 'react-router-dom';
import * as S from './styles/HomePage.styles';

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
