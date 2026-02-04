import React from 'react';
import styled from 'styled-components';
import { ProductCard } from '../components/ProductCard';
import { Header } from '../components/Header';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

const HeroSection = styled.section`
  padding: 80px 40px 100px 40px;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 72px;
  font-weight: 300;
  letter-spacing: 12px;
  text-transform: uppercase;
  margin: 0 0 25px 0;
  font-family: 'Cormorant Garamond', serif;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 42px;
    letter-spacing: 8px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  color: #d4af37;
  letter-spacing: 3px;
  text-transform: uppercase;
  max-width: 700px;
  margin: 0 auto 15px auto;
  font-weight: 300;
  position: relative;
  z-index: 1;
`;

const HeroDescription = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 300;
  position: relative;
  z-index: 1;
`;

const ProductsSection = styled.section`
  padding: 100px 40px 120px 40px;
  max-width: 1600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 8px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 20px 0;
  color: #1a1a1a;
  font-family: 'Cormorant Garamond', serif;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  letter-spacing: 2px;
  margin: 0 0 80px 0;
  text-transform: uppercase;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const LandingPage: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroTitle>OK Crisis</HeroTitle>
        <HeroSubtitle>Maison de Couture</HeroSubtitle>
        <HeroDescription>
          Where royal heritage meets contemporary luxury. Each piece tells a story of elegance, crafted for those who demand excellence.
        </HeroDescription>
      </HeroSection>
      <ProductsSection>
        <SectionTitle>The Collection</SectionTitle>
        <SectionSubtitle>Limited Edition • Handcrafted Excellence</SectionSubtitle>
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
