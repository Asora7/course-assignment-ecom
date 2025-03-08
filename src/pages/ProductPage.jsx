//pages/ProductPage.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../data/api";
import { useCart } from "../context/CartContext";
import Layout from "../components/Layout";
import * as S from '../components/styles/ProductPage.styles'; // Import styles

function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
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
        <Layout>
            <S.ProductContainer>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductImage src={product.image.url} alt={product.image.alt} />
                <S.ProductDescription>{product.description}</S.ProductDescription>
                <S.ProductPrice>
                    ${product.discountedPrice}
                    {discount > 0 && <S.DiscountText>({discount} off)</S.DiscountText>}
                </S.ProductPrice>
                <S.AddToCartButton onClick={() => addToCart(product)}>
                    Add to Cart
                </S.AddToCartButton>

                {/* Continue Shopping Button */}
                <S.ContinueShoppingButton onClick={() => navigate('/')}>
                    Continue Shopping
                </S.ContinueShoppingButton>

                {product.reviews && product.reviews.length > 0 && (
                    <S.ReviewsSection>
                        <S.ReviewTitle>Reviews:</S.ReviewTitle>
                        <S.ReviewList>
                            {product.reviews.map((review) => (
                                <S.ReviewItem key={review.id}>
                                    <strong>{review.username}:</strong> {review.description}
                                </S.ReviewItem>
                            ))}
                        </S.ReviewList>
                    </S.ReviewsSection>
                )}
            </S.ProductContainer>
        </Layout>
    );
}

export default ProductPage;
