import { useCart } from "../../context/CartContext";
import "./CartList.css";

export default function CartList() {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return <p className="cartlist-empty">No items in cart.</p>;
  }

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="cart-table-product">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            </td>
            <td>${item.price.toFixed(2)}</td>
            <td>{item.qty}</td>
            <td>${(item.price * item.qty).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>Total</td>
          <td>${cartTotal.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
}