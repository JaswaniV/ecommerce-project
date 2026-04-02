import api, {IMAGE_URL} from "../../apii"; 
import { useState } from "react";

function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart= async () => {
    await api.post("/api/cart-items", {
      productId: product.id,
      quantity: quantity, //As Both the key and values are of same name we can write it as quantity instead of quantity:quantity Basically following the shorthand property name syntax of JS
    });
    await loadCart();
  };

  const selectQuantity=(event)=> {
    const quantitySelected=Number(event.target.value);
    setQuantity(quantitySelected);
  };




  return (
    <div className="product-container" data-testid="product-container">
      <div className="product-image-container">
        <img className="product-image" data-testid='product-image' src={`${IMAGE_URL}/${product.image}`} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars" data-testid='product-rating-stars-image'
          src={`${IMAGE_URL}/images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">Rs.{product.priceCents}</div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={selectQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src={`${IMAGE_URL}/images/icons/checkmark.png`} />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        data-testid='add-to-cart-button'
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
