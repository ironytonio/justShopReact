import React from "react";
import { useSelector } from "react-redux";
import q from "./ProductComponent.module.css";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = () => {
    return products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div key={id}>
          <Link to={`/product/${id}`} className={q.link}>
            <div className={q.cards}>
              <div className={q.card}>
                <div className={q.imageContainer}>
                  <img src={image} alt={title} className={q.image} />
                </div>

                <div>
                  <div className={q.header}>
                    <h3 style={{ textDecoration: "none" }} className={q.title}>
                      {title}
                    </h3>
                  </div>
                  <div>
                    <h2 className={q.price}>${price}</h2>
                  </div>
                  <div>
                    <h4 className={q.category}>{category}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  return <div className={q.box}>{renderList()}</div>;
};

export default ProductComponent;
