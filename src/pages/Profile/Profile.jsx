import { userData } from "../../data/user";
import CartList from "../../components/cartList/CartList";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-inner">

        {/* User Info */}
        <div className="profile-header">
        
          <div>
            <h1 className="profile-name">{userData.name}</h1>
            <p className="profile-email">{userData.email}</p>
          </div>
        </div>

        {/* Cart Table */}
        <div className="profile-card">
          <h2>Cart Items</h2>
          <CartList />
        </div>

      </div>
    </div>
  );
}