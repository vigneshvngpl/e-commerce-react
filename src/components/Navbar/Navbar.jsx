import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAppContext } from "../../context/AppContext";
import { useThemeTokens } from "../../hooks/useThemeTokens";
import { BsSun, BsMoon, BsBag, BsPerson, BsList } from "react-icons/bs";
import "./Navbar.css";

export default function Navbar() {
  const { config, themeName, toggleTheme } = useAppContext();
  const { cartCount } = useCart();
  const { c } = useThemeTokens();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <div className="logo-icon" style={{ background: c("accent") }}>
          <BsBag size={16} color="white" />
        </div>
        <span className="logo-text">{config.brand.name}</span>
      </Link>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {config.navLinks.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className={`nav-link ${isActive(path) ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
          {themeName === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
        </button>

        <Link to="/profile" className="cart-btn">
          <BsBag size={20} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        <Link to="/profile" className={`profile-btn`} title="Profile">
          <BsPerson size={20} />
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <BsList size={22} />
        </button>
      </div>
    </nav>
  );
}