import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
   
  };



  return (
    <div className="product-card">
     
  
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-rating">
        
      
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className={`add-to-cart ${added ? "added" : ""}`} onClick={handleAddToCart}>
            {added ? (
              <>
                
                Added!
              </>
            ) : (
              <>
               
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}