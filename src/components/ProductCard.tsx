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
  height: 500px;
  overflow: hidden;
  background: #f5f5f5;
  
  ${props => props.isSplit && `
    position: relative;
    background: #f5f5f5;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: url('/brand/2a.JPEG') center/cover;
      clip-path: polygon(0 0, 100% 0, 0 100%);
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: url('/brand/2b.JPEG') center/cover;
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }
  `}
`;

const PlaceholderImage = styled.div<{ isSplit?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #888;
  background: #f0f0f0;
  
  ${props => props.isSplit && `
    background: transparent;
    
    &::before {
      content: 'BLACK VERSION';
      position: absolute;
      top: 25%;
      left: 25%;
      font-size: 12px;
      color: #000;
      font-weight: bold;
    }
    
    &::after {
      content: 'PINK VERSION';
      position: absolute;
      bottom: 25%;
      right: 25%;
      font-size: 12px;
      color: #ff69b4;
      font-weight: bold;
    }
  `}
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
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 8px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 12px;
`;

const SalePrice = styled.span`
  font-size: 16px;
  font-weight: 400;
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
        <PlaceholderImage isSplit={isSplit}>
          {!isSplit && `${product.name} IMAGE PLACEHOLDER`}
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
