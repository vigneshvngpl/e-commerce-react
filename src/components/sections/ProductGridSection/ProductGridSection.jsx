import { useNavigate } from "react-router-dom";
import { useThemeTokens } from "../../../hooks/useThemeTokens";
import ProductCard from "../../ProductCard/ProductCard";
import "./ProductGridSection.css";
import { products } from "../../../data/products";

export default function ProductGridSection({ section }) {
  const navigate = useNavigate();
  const { styles, c } = useThemeTokens();
  const featured = products.slice(0, section.maxItems ?? 4);

  return (
    <section className="featured">
      <div className="section-header">
        <div>
          <h2 style={styles.heading}>{section.heading}</h2>
          <p style={styles.muted}>{section.subtext}</p>
        </div>
        {section.cta && (
          <button
            className="view-all"
            style={{ ...styles.btnGhost, borderColor: c("border") }}
            onClick={() => navigate(section.cta.path)}
          >
            {section.cta.label}
          </button>
        )}
      </div>
      <div className="products-grid">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}