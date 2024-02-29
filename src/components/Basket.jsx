import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
const cart = useSelector(state => state.cartAdd)

    return(
        <div>
{cart.map(item => (
    <li key={item.id}>
{item.title}
    </li>
))
}
        </div>
    )
}
export default Basket