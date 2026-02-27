import { products } from "../../data/products";
import "./Products.css";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="products-hero-inner">
          <span className="page-eyebrow">Our Collection</span>
          <h1>Premium Audio Gear</h1>
          <p>Explore {products.length}+ products from the world's leading audio brands</p>
        </div>
      </div>

      <div className="products-main">
        <div className="products-grid-page">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}