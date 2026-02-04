import React, { useState } from 'react';
import styled from 'styled-components';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const Card = styled.div`
  position: relative;
  background: #111111;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.1);
  
  &:hover {
    transform: translateY(-12px);
    border-color: rgba(212, 175, 55, 0.3);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 175, 55, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 133.33%; /* 3:4 aspect ratio */
  overflow: hidden;
  background: #0a0a0a;
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  color: #999;
  font-size: 14px;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 2px;
`;

const HoverOverlay = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.92);
  color: white;
  padding: 40px 30px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  backdrop-filter: blur(10px);
  z-index: 10;
`;

const StoryText = styled.p`
  font-size: 13px;
  line-height: 1.8;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  max-width: 100%;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.3px;
`;

const ProductInfo = styled.div`
  padding: 40px 35px;
  background: #111111;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
`;

const ProductName = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 15px 0;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: 'Cormorant Garamond', serif;
  color: #ffffff;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const SalePrice = styled.span`
  font-size: 28px;
  font-weight: 400;
  color: #d4af37;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 1px;
`;

const SaleLabel = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: #d4af37;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid #d4af37;
  padding: 4px 10px;
  border-radius: 2px;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 22px;
  background: transparent;
  color: #d4af37;
  border: 1px solid #d4af37;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Cormorant Garamond', serif;
  
  &:hover {
    background: #d4af37;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [showStory, setShowStory] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <Card 
      onMouseEnter={() => setShowStory(true)}
      onMouseLeave={() => setShowStory(false)}
    >
      <ImageContainer>
        {!imageError ? (
          <ProductImage 
            src={product.image} 
            alt={product.name}
            onError={() => {
              console.log('Image failed to load:', product.image);
              setImageError(true);
            }}
          />
        ) : (
          <ImagePlaceholder>
            {product.name}
          </ImagePlaceholder>
        )}
        <HoverOverlay $isVisible={showStory}>
          <StoryText>{product.hoverStory}</StoryText>
        </HoverOverlay>
      </ImageContainer>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <PriceContainer>
          <OriginalPrice>${product.price.toLocaleString()}</OriginalPrice>
          <SalePrice>${product.salePrice}</SalePrice>
          <SaleLabel>Exclusive Offer</SaleLabel>
        </PriceContainer>
        <AddToCartButton onClick={() => onAddToCart(product)}>
          Add to Collection
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
};
