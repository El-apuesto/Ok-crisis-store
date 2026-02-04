import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const HeaderContainer = styled.header`
  background: #000;
  border-bottom: 1px solid #2a2a2a;
  padding: 25px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: #d4af37;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const CartLink = styled(NavLink)`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -15px;
  background: #d4af37;
  color: #000;
  font-size: 10px;
  font-weight: 500;
  padding: 3px 7px;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
`;

export const Header: React.FC = () => {
  const { cart } = useCart();
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <LogoImage src="/brand/logo.PNG" alt="OK Crisis" />
        </Logo>
        <Nav>
          <NavLink to="/">Collection</NavLink>
          <CartLink to="/cart">
            Cart
            {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
          </CartLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
