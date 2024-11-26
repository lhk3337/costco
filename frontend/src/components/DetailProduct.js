import { useParams } from "react-router-dom";
import useFetchWithErrorHandling from "../hook/useFetchWithErrorHandling";

const DetailProduct = () => {
  const { id } = useParams();
  const {
    data: detailProduct,
    error,
    isLoading,
  } = useFetchWithErrorHandling(`${process.env.REACT_APP_SERVER_URL}/product/${id}`);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detailProduct) return;
  return (
    <>
      <div>
        <h3>{detailProduct.product_name}</h3>
        <p>{detailProduct.category_name}</p>
        <p>원가 : {detailProduct.normal_price}</p>
        <p>할인가 :{detailProduct.sale_price}</p>
        <p>할인 : {detailProduct.discount}</p>
      </div>
    </>
  );
};
export default DetailProduct;
