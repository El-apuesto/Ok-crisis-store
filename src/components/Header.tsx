import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const HeaderContainer = styled.header`
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #666;
  }
`;

const CartLink = styled(NavLink)`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background: #000;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
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
          OK Crisis
        </Logo>
        <Nav>
          <NavLink to="/">Shop</NavLink>
          <CartLink to="/cart">
            Cart
            {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
          </CartLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
