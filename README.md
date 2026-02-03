# OK Crisis

A luxury e-commerce store inspired by high-end fashion brands, featuring exclusive t-shirts with royal family stories.

## Features

- **Louis Vuitton-inspired design** with minimalist luxury aesthetic
- **Interactive product cards** with hover stories about royal family connections
- **Shopping cart** with savings calculation
- **Stripe checkout integration** (ready for implementation)
- **Printful integration** for order fulfillment (ready for implementation)
- **Responsive design** optimized for all devices

## Products

1. **Midnight Hex** - $1,234 → $23
   - Features witchcraft story about Princess Charlotte
   - "WITCH" emblazoned across the front

2. **Discreet Anarchy** - $1,530 → $23
   - Split diagonal design (pink/black)
   - Queen Elizabeth II bedtime shirt story
   - Inspired "Anarchy in the UK" album

3. **OK Crisis** - $1,131 → $23
   - Princess Diana's favorite during challenging years
   - Symbol of grace in chaos

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your brand assets:
   - Place your logo in `public/brand/logo`
   - Add t-shirt images as `public/brand/1`, `public/brand/2`, `public/brand/3`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the store.

## Payment & Fulfillment Setup

### Stripe Integration
1. Add your Stripe publishable key to `src/services/stripe.ts`
2. Set up backend endpoint for checkout session creation
3. Configure webhook endpoints for payment confirmation

### Printful Integration
1. Add your Printful API key to backend services
2. Configure product variants and pricing
3. Set up webhook for order fulfillment

## Project Structure

```
src/
├── components/          # React components
│   ├── ProductCard.tsx # Product display with hover effects
│   └── Header.tsx      # Navigation header
├── contexts/           # React contexts
│   └── CartContext.tsx # Shopping cart state management
├── pages/              # Page components
│   ├── LandingPage.tsx # Main store page
│   └── CartPage.tsx    # Shopping cart and checkout
├── services/           # External service integrations
│   └── stripe.ts       # Stripe & Printful integration
├── data/               # Static data
│   └── products.ts     # Product definitions
└── types/              # TypeScript interfaces
    └── index.ts        # Type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Adding New Products
1. Update `src/data/products.ts` with new product details
2. Add product images to `public/brand/` directory
3. Update hover stories as needed

### Styling
The project uses styled-components for styling. Modify component styles directly in each component file.

### Brand Assets
Replace placeholder images in `public/brand/`:
- `logo` - Store logo
- `1`, `2`, `3` - Product images

## Deployment

The app is ready for deployment to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

For production deployment with payment processing, ensure:
1. Environment variables are properly configured
2. Backend services for Stripe/Printful are deployed
3. SSL certificates are configured

## License

This project is provided as-is for educational and demonstration purposes.
