import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";
import q from "./Basket.module.css";

const Basket = () => {
  const cart = useSelector((state) => state.productCart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className={q.container}>
      {cart && cart.length > 0 ? (
        <div className={q.boxes}>
          {cart.map((item) => (
            <div key={item.id} className={q.box}>
              <img src={item.image} alt="zaraza" className={q.img} />
              <p>{item.title}</p>
              <button
                className="btn"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className={q.fail}>
          <img
            className={q.imgFail}
            src="https://www.lilyskitchen.co.uk/on/demandware.static/-/Library-Sites-lilsrp-content-global/default/dw5216602c/shopping-cart/empty-cart-banner.svg"
            alt="Empty cart"
          />
          <p>Unfortunately, the shopping cart is still empty</p>
        </div>
      )}
    </div>
  );
};

export default Basket;
