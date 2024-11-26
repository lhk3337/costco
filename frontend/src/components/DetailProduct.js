import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const [detailProduct, setDetailProduct] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        const response = await fetch(`http://127.0.0.1:5005/product/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setDetailProduct(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Error: {error}</div>;
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
