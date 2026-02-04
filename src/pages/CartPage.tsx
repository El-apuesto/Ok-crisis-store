import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { useCart } from '../contexts/CartContext';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

const CartSection = styled.section`
  padding: 100px 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 8px;
  text-transform: uppercase;
  margin: 0 0 60px 0;
  font-family: 'Cormorant Garamond', serif;
  color: #1a1a1a;
  text-align: center;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 0;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
`;

const EmptyCartMessage = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  letter-spacing: 1px;
`;

const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  padding: 18px 45px;
  background: #1a1a1a;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  transition: all 0.3s ease;
  border: 2px solid #1a1a1a;
  
  &:hover {
    background: transparent;
    color: #1a1a1a;
  }
`;

const CartContent = styled.div`
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  overflow: hidden;
`;

const CartItems = styled.div`
  padding: 40px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #e8e8e8;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
  margin-right: 30px;
  background: #f5f5f5;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemName = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Cormorant Garamond', serif;
  color: #1a1a1a;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
`;

const ItemPrice = styled.span`
  font-size: 20px;
  color: #d4af37;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
`;

const ItemControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #e0e0e0;
  padding: 8px 15px;
`;

const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1a1a1a;
  }
`;

const Quantity = styled.span`
  min-width: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

const RemoveButton = styled.button`
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #ddd;
  color: #999;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #999;
    color: #666;
  }
`;

const CartSummary = styled.div`
  background: #f8f8f8;
  padding: 40px;
  border-top: 1px solid #e8e8e8;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 15px;
  color: #666;
  letter-spacing: 1px;
`;

const SummaryRowTotal = styled(SummaryRow)`
  font-weight: 400;
  font-size: 28px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #d4af37;
  color: #1a1a1a;
  font-family: 'Cormorant Garamond', serif;
`;

const SavingsHighlight = styled.div`
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  color: #1a1a1a;
  padding: 20px;
  border-radius: 2px;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 14px;
  text-transform: uppercase;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 22px;
  background: #1a1a1a;
  color: white;
  border: 2px solid #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background: transparent;
    color: #1a1a1a;
  }
`;

export const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = () => {
    alert('Proceeding to secure checkout...');
  };

  if (cart.items.length === 0) {
    return (
      <PageContainer>
        <Header />
        <CartSection>
          <PageTitle>Your Cart</PageTitle>
          <EmptyCart>
            <EmptyCartMessage>Your collection awaits</EmptyCartMessage>
            <ContinueShoppingButton to="/">
              Explore Collection
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
        <PageTitle>Your Cart</PageTitle>
        
        <CartContent>
          <CartItems>
            {cart.items.map(item => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <PriceRow>
                    <OriginalPrice>${item.price.toLocaleString()}</OriginalPrice>
                    <ItemPrice>${item.salePrice}</ItemPrice>
                  </PriceRow>
                </ItemDetails>
                <ItemControls>
                  <QuantityControls>
                    <QuantityButton 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
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
                </ItemControls>
              </CartItem>
            ))}
          </CartItems>

          <CartSummary>
            {cart.savings > 0 && (
              <SavingsHighlight>
                You Saved ${cart.savings.toLocaleString()}
              </SavingsHighlight>
            )}
            
            <SummaryRow>
              <span>Subtotal</span>
              <span>${cart.total.toLocaleString()}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Shipping</span>
              <span>Complimentary</span>
            </SummaryRow>
            <SummaryRowTotal>
              <span>Total</span>
              <span>${cart.total}</span>
            </SummaryRowTotal>
            
            <CheckoutButton onClick={handleCheckout}>
              Proceed to Checkout
            </CheckoutButton>
          </CartSummary>
        </CartContent>
      </CartSection>
    </PageContainer>
  );
};
