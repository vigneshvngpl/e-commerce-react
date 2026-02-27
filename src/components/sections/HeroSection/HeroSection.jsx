import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { useThemeTokens } from "../../../hooks/useThemeTokens";

export default function HeroSection({ section }) {
  const navigate = useNavigate();
  const { styles, c } = useThemeTokens();
  const lines = section.heading.split("\n");

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow" style={{ background: c("accentSoft"), color: c("accent") }}>
          {section.eyebrow}
        </span>
        <h1 className="hero-title" style={styles.heading}>
          {lines[0]}<br />
          <em style={{ color: c("accent") }}>{lines[1]}</em>
        </h1>
        <p className="hero-sub" style={styles.muted}>{section.subtext}</p>
        <div className="hero-cta">
          <button
            className="btn-primary"
            style={styles.btnPrimary}
            onClick={() => navigate(section.cta.path)}
          >
            {section.cta.label}
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-blob" style={{ background: `radial-gradient(circle, ${c("accentSoft")} 0%, transparent 70%)` }} />
        <img
          src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=700&q=90"
          alt="Premium Headphones"
          className="hero-img"
        />
      </div>
    </section>
  );
}