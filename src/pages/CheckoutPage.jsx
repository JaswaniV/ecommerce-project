import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./checkout-header.css";
import "./CheckoutPage.css";

function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOption(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);

  return (
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cart.map((item) => {
              const selectedDeliveryOption = deliveryOptions.find(
                (option) => option.id === item.deliveryOptionId,
              );

              return (
                <div key={item.productId} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date:{" "}
                    {dayjs(
                      selectedDeliveryOption.estimatedDeliveryTimeMs,
                    ).format("dddd, MMMM D")}
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image" src={item.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">{item.product.name}</div>
                      <div className="product-price">Rs.{item.product.priceCents}</div>
                      <div className="product-quantity">
                        <span>
                          Quantity:{" "}
                          <span className="quantity-label">
                            {item.quantity}
                          </span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOptions.map((option) => {
                        let priceString = "FREE Shipping";

                        if (option.priceCents > 0) {
                          priceString = `Rs.${option.priceCents} - Shipping`;
                        }

                        return (
                          <div key={option.id} className="delivery-option">
                            <input
                              type="radio"
                              checked={option.id === item.deliveryOptionId}
                              className="delivery-option-input"
                              name={`delivery-option-${item.productId}`}
                            />
                            <div>
                              <div className="delivery-option-date">
                                {dayjs(option.estimatedDeliveryTimeMs).format(
                                  "dddd, MMMM D",
                                )}
                              </div>

                              <div className="delivery-option-price">
                                {priceString}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            {paymentSummary && (
              <>
                <div className="payment-summary-row">
                  <div>Items ({paymentSummary.totalItems}):</div>
                  <div className="payment-summary-money">
                    Rs.{paymentSummary.productCostCents.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div className="payment-summary-money">
                    Rs.{paymentSummary.shippingCostCents.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div className="payment-summary-money">
                    Rs.{paymentSummary.totalCostBeforeTaxCents.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div className="payment-summary-money">
                    Rs.{paymentSummary.taxCents.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div className="payment-summary-money">
                    Rs.{paymentSummary.totalCostCents.toFixed(2)}
                  </div>
                </div>

                <button className="place-order-button button-primary">
                  Place your order
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
