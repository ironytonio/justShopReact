import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";
import { useEffect } from "react";
import q from "./ProductDetails.module.css";
import { addToCart } from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        console.log(response.data);
        dispatch(selectedProducts(response.data));
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId, dispatch]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>Loading</div>
      ) : (
        <div className={q.container}>
          <div className={q.contImg}>
            <img src={image} alt="zaraza" className={q.img}/>
          </div>
          <div className={q.box}>
            <h1 className={q.title}>{title}</h1>
            <div className={q.colorBox}><h2>${price}</h2></div>
            <button onClick={handleAddToCart}>Add</button>
            <h4>{category}</h4>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
