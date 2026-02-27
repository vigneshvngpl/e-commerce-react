import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { AppProvider, useAppContext, resolvePage } from "./context/AppContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function AppRoutes() {
  const { config } = useAppContext();

  return (
    <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center", opacity: 0.5 }}>Loading…</div>}>
      <Routes>
        {config.routes.map(({ path, pageType }) => {
          const Page = resolvePage(pageType);
          return <Route key={path} path={path} element={Page ? <Page /> : null} />;
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <CartProvider>
          <Navbar />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </CartProvider>
      </AppProvider>
    </BrowserRouter>
  );
}