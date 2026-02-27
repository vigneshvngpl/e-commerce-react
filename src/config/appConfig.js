

export const appConfig = {
  // Brand 
  brand: {
    name: "SoundWave",
    tagline: "Premium Audio Experience",
  },

  //Theme 
  themes: {
    light: {
      bgPrimary: "#ffffff",
      bgSecondary: "#f8f7f4",
      navBg: "rgba(255,255,255,0.85)",
      footerBg: "#f4f3ef",
      cardBg: "#ffffff",
      imgBg: "#f1f0ec",
      textPrimary: "#1a1814",
      textSecondary: "#6b6760",
      border: "#e8e5df",
      hoverBg: "#f5f4f0",
      accent: "#e8610a",
      accentDark: "#c4500a",
      accentSoft: "#fdf1e8",
      accentSoftBorder: "#f5c99e",
      accentRgb: "232,97,10",
    },
    dark: {
      bgPrimary: "#0f0e0d",
      bgSecondary: "#171614",
      navBg: "rgba(15,14,13,0.9)",
      footerBg: "#0a0908",
      cardBg: "#1c1a18",
      imgBg: "#252220",
      textPrimary: "#f5f3ef",
      textSecondary: "#9a9490",
      border: "#3d2501",
      hoverBg: "#252220",
      accent: "#f07030",
      accentDark: "#d05a1a",
      accentSoft: "rgba(240,112,48,0.1)",
      accentSoftBorder: "rgba(240,112,48,0.3)",
      accentRgb: "240,112,48",
    },
  },

  //  Spacing scale 
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },

  //  Typography
  fonts: {
    display: "'Playfair Display', serif",
    body: "'DM Sans', sans-serif",
  },

  //  Navigation links
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },

  ],

  //  Routes
  routes: [
    { path: "/", pageType: "home" },
    { path: "/products", pageType: "products" },
    { path: "/profile", pageType: "profile" },
  ],

  // Home page
  homeSections: [
    {
      id: "hero",
      type: "hero",
      eyebrow: "Premium Audio Experience",
      heading: "Exquisite Sound\n& Headphones",
      subtext: "Discover world-class audio equipment. From noise-canceling headphones to true wireless earbuds — designed for audiophiles.",
      cta: { label: "Shop All Products", path: "/products" },
    },
    ,
  {
    id: "featured",
    type: "productGrid",      
    heading: "Featured Products",
    subtext: "Hand‑picked audio gear just for you",
    maxItems: 6,
    cta: { label: "View All", path: "/products" },
  },
  ],


};