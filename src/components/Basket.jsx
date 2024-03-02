import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";

const Basket = () => {
    const cart = useSelector(state => state.cartAdd.cart);
    const dispatch = useDispatch()

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div>
            {cart && cart.length > 0 ? (
                <ul>
                    {cart.map(item => (
                        <div key={item.id}> 
                            <li>
                                <img src={item.image} alt="zaraza" />  
                                {item.title}
                            </li>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div>
                    <img src="https://www.lilyskitchen.co.uk/on/demandware.static/-/Library-Sites-lilsrp-content-global/default/dw5216602c/shopping-cart/empty-cart-banner.svg" alt="Empty cart" />
                    <p>Unfortunately, the shopping cart is still empty</p>
                </div>
            )}
        </div>
    );
};

export default Basket;