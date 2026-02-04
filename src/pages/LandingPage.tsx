import React from 'react';
import styled from 'styled-components';
import { ProductCard } from '../components/ProductCard';
import { Header } from '../components/Header';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #fff;
`;

const HeroSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #fafafa;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  letter-spacing: 1px;
  max-width: 600px;
  margin: 0 auto;
`;

const ProductsSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 60px 0;
`;

const ProductsGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  
  > div {
    flex: 1;
    max-width: calc(33.333% - 14px);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    
    > div {
      max-width: 100%;
    }
  }
`;

export const LandingPage: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroTitle>OK Crisis</HeroTitle>
        <HeroSubtitle>
          Exclusive royal-inspired fashion with stories that transcend time
        </HeroSubtitle>
      </HeroSection>
      <ProductsSection>
        <SectionTitle>Collection</SectionTitle>
        <ProductsGrid>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </ProductsGrid>
      </ProductsSection>
    </PageContainer>
  );
};
