import { Link } from "react-router";
import { IMAGE_URL } from "../../apii"; //  

function CheckoutHeader(){
    return (
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/"> 
              <h2 style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "black",
                textDecoration: "none"
              }}>
                VJ Commerce
              </h2>
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img 
              src={`${IMAGE_URL}/images/icons/checkout-lock-icon.png`}
              
            />
          </div>
        </div>
      </div>
    );
}

export default CheckoutHeader;