import React from 'react';
import styled from 'styled-components';
import { ProductCard } from '../components/ProductCard';
import { Header } from '../components/Header';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: #fff;
`;

const HeroSection = styled.section`
  padding: 120px 40px 140px 40px;
  text-align: center;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d0d0d 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 96px;
  font-weight: 200;
  letter-spacing: 16px;
  text-transform: uppercase;
  margin: 0 0 30px 0;
  font-family: 'Cormorant Garamond', serif;
  position: relative;
  z-index: 1;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 52px;
    letter-spacing: 10px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #d4af37;
  letter-spacing: 4px;
  text-transform: uppercase;
  max-width: 800px;
  margin: 0 auto 20px auto;
  font-weight: 200;
  position: relative;
  z-index: 1;
`;

const HeroDescription = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1.5px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.9;
  font-weight: 200;
  position: relative;
  z-index: 1;
`;

const ProductsSection = styled.section`
  padding: 140px 40px 160px 40px;
  max-width: 1800px;
  margin: 0 auto;
  background: #0a0a0a;
`;

const SectionTitle = styled.h2`
  font-size: 64px;
  font-weight: 200;
  letter-spacing: 12px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 30px 0;
  color: #ffffff;
  font-family: 'Cormorant Garamond', serif;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 14px;
  color: #d4af37;
  letter-spacing: 3px;
  margin: 0 0 100px 0;
  text-transform: uppercase;
  font-weight: 200;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  
  @media (max-width: 1400px) {
    gap: 60px;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
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
