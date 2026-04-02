import { NavLink } from "react-router";
import './header.css';


type HeaderProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[];
}

function Header( { cart }: HeaderProps) {

  let totalQuantity = 0;
  cart.forEach( (item) => {
    totalQuantity += item.quantity;
  });



  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <h2 className="logo-text">VJ Commerce</h2>
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
