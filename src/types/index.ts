export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice: number;
  image: string;
  hoverStory: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  savings: number;
}
