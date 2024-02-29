import React from "react";
import q from "./Header.module.css";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

const Header = () => {
const id = useSelector(state=>state.cart)
console.log(id)

  return (
    <div className={q.container}>
      <div className={q.box}>
        <h1>FakeShop</h1>
        <Link to="/basket" className={q.basket}>
          <div className={q.circle}>{id}</div>
          <FaBasketShopping className={q.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
