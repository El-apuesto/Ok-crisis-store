import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { useCart } from '../contexts/CartContext';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #fff;
`;

const CartSection = styled.section`
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 40px 0;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 60px 0;
`;

const EmptyCartMessage = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background: #000;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #333;
  }
`;

const CartItems = styled.div`
  margin-bottom: 40px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background: #f0f0f0;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #888;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  margin: 0;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const Quantity = styled.span`
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  padding: 8px 16px;
  background: transparent;
  border: 1px solid #999;
  color: #999;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const CartSummary = styled.div`
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
`;

const SummaryRowTotal = styled(SummaryRow)`
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
`;

const SavingsHighlight = styled.div`
  background: #e8f5e8;
  color: #2d5016;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 20px;
  background: #000;
  color: white;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #333;
  }
`;

export const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = () => {
    // Stripe checkout integration will go here
    alert('Stripe checkout integration coming soon!');
  };

  if (cart.items.length === 0) {
    return (
      <PageContainer>
        <Header />
        <CartSection>
          <PageTitle>Shopping Cart</PageTitle>
          <EmptyCart>
            <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
            <ContinueShoppingButton to="/">
              Continue Shopping
            </ContinueShoppingButton>
          </EmptyCart>
        </CartSection>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <CartSection>
        <PageTitle>Shopping Cart</PageTitle>
        
        <CartItems>
          {cart.items.map(item => (
            <CartItem key={item.id}>
              <ItemImage>
                {item.name === 'Discreet Anarchy' ? 'SPLIT' : 'IMAGE'}
              </ItemImage>
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.salePrice}</ItemPrice>
              </ItemDetails>
              <QuantityControls>
                <QuantityButton 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </QuantityButton>
                <Quantity>{item.quantity}</Quantity>
                <QuantityButton 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </QuantityButton>
              </QuantityControls>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
        </CartItems>

        <CartSummary>
          {cart.savings > 0 && (
            <SavingsHighlight>
              You saved ${cart.savings.toLocaleString()}!
            </SavingsHighlight>
          )}
          
          <SummaryRow>
            <span>Subtotal</span>
            <span>${cart.total.toLocaleString()}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </SummaryRow>
          <SummaryRowTotal>
            <span>Total</span>
            <span>${cart.total.toLocaleString()}</span>
          </SummaryRowTotal>
          
          <CheckoutButton onClick={handleCheckout}>
            Proceed to Checkout
          </CheckoutButton>
        </CartSummary>
      </CartSection>
    </PageContainer>
  );
};
