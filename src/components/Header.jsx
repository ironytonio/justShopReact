import React from "react";
import q from "./Header.module.css";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const id = useSelector((state) => state.cart);
  console.log(id);

  return (
    <div className={q.container}>
      <div className={q.box}>
        <Link to="/" className={q.nameBox}>
          <h1 className={q.name}>FakeShop</h1>
        </Link>
        <Link to="/basket" className={q.basket}>
          <FaBasketShopping className={q.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
