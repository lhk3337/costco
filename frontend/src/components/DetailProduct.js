import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailProduct = () => {
  const [detailProduct, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://127.0.0.1:5005/product/${id}`);
      const result = await response.json();
      setIsLoading(false);
      setProduct(result);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <div>
          <h3>{detailProduct.product_name}</h3>
          <p>{detailProduct.category_name}</p>
          <p>원가 : {detailProduct.normal_price}</p>
          <p>할인가 :{detailProduct.sale_price}</p>
          <p>할인 : {detailProduct.discount}</p>
        </div>
      )}
    </>
  );
};
export default DetailProduct;
