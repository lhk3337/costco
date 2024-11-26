import React from "react";
import { Link } from "react-router-dom";
const Products = ({ product_name, normal_price, discount, sale_price, product_id }) => {
  return (
    <>
      <Link to={`/product/${product_id}`}>
        <h3>{product_name}</h3>
        <p>원가 : {normal_price}</p>
        <p>할인가 :{sale_price}</p>
        <p>할인 : {discount}</p>
      </Link>
    </>
  );
};

export default Products;
