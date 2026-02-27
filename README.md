# SoundWave

E-commerce app for audio products.

## Libraries

- React + Vite
- React Router DOM
- React Icons

## Pages

- `/` — Home
- `/products` — All products
- `/profile` — User profile and cart items

## Components


- `Navbar` — top nav with theme toggle, cart badge, profile link
- `Footer` — site footer
- `ProductCard` — displays a single product with add to cart
- `CartList` — table of cart items shown on profile
- `HeroSection` — hero section on home page
- `ProductGridSection` — featured products grid on home page

## Important Files

- `appConfig.js` — theme colors, routes, nav links, home sections
- `AppContext.jsx` — provides config and theme to the app
- `CartContext.jsx` — cart state, add to cart, item count
- `useThemeTokens.js` — style objects derived from config
- `products.js` — product data
- `user.js` — user profile data