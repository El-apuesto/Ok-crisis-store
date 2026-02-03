import React from 'react';
import styled from 'styled-components';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const Card = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid #e5e5e5;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div<{ isSplit?: boolean }>`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #f5f5f5;
  
  ${props => props.isSplit && `
    background: linear-gradient(135deg, #ff69b4 50%, #000000 50%);
  `}
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #888;
  background: #f0f0f0;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  ${Card}:hover & {
    opacity: 1;
  }
`;

const StoryText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  font-family: 'Georgia', serif;
  max-width: 90%;
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 10px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
`;

const SalePrice = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #000;
  color: white;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #333;
  }
`;

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const isSplit = product.name === 'Discreet Anarchy';
  
  return (
    <Card>
      <ImageContainer isSplit={isSplit}>
        <PlaceholderImage>
          {product.name === 'Discreet Anarchy' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ 
                width: '60%', 
                height: '50%', 
                background: '#ff69b4',
                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)'
              }} />
              <div style={{ 
                width: '60%', 
                height: '50%', 
                background: '#000',
                clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
                marginTop: '-50%'
              }} />
            </div>
          ) : (
            `${product.name} IMAGE PLACEHOLDER`
          )}
        </PlaceholderImage>
        <HoverOverlay>
          <StoryText>{product.hoverStory}</StoryText>
        </HoverOverlay>
      </ImageContainer>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <PriceContainer>
          <OriginalPrice>${product.price.toLocaleString()}</OriginalPrice>
          <SalePrice>${product.salePrice}</SalePrice>
        </PriceContainer>
        <AddToCartButton onClick={() => onAddToCart(product)}>
          Add to Cart
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
};
