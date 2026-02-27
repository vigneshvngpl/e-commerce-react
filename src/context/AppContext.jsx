import { createContext, useContext, useState, useEffect } from "react";
import { appConfig } from "../config/appConfig";
import { lazy } from "react";



const pageComponents = {
  home:     lazy(() => import("../pages/Home")),
  products: lazy(() => import("../pages/Products/Products")),
  profile:  lazy(() => import("../pages/Profile/Profile")),
};

const sectionComponents = {
  hero:        lazy(() => import("../components/sections/HeroSection/HeroSection")),
  productGrid: lazy(() => import("../components/sections/ProductGridSection/ProductGridSection")),
};

export function resolvePage(pageType)       { return pageComponents[pageType] ?? null; }
export function resolveSection(sectionType) { return sectionComponents[sectionType] ?? null; }


function tokenToCSSVar(key) {
  return "--" + key.replace(/([A-Z])/g, (c) => "-" + c.toLowerCase());
}


const AppContext = createContext();

export function AppProvider({ children }) {
  const [themeName, setThemeName] = useState("light");


  useEffect(() => {
    const tokens = appConfig.themes[themeName];
    const root = document.documentElement;
    Object.entries(tokens).forEach(([key, value]) => {
      root.style.setProperty(tokenToCSSVar(key), value);
    });
    root.setAttribute("data-theme", themeName);
  }, [themeName]);

  const toggleTheme = () =>
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider
      value={{
        config: appConfig,
        theme: appConfig.themes[themeName],
        themeName,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}