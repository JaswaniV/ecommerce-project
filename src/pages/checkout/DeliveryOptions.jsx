import dayjs from "dayjs";
import axios from "axios";


function DeliveryOptions({ deliveryOptions, item, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((option) => {
        let priceString = "FREE Shipping";

        if (option.priceCents > 0) {
          priceString = `Rs.${option.priceCents} - Shipping`;
        }


        const updateDeliveryOption = async() =>{
          await axios.put(`/api/cart-items/${item.productId}`,{
            deliveryOptionId: option.id,
          } );
          await loadCart();
        }

        return (
          <div key={option.id} className="delivery-option" 
            onClick={updateDeliveryOption}>
            <input
              type="radio"
              checked={option.id === item.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${item.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(option.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
              </div>

              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default DeliveryOptions;
