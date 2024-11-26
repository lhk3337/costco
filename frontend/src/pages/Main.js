import Products from "../components/Products";
import useFetchWithErrorHandling from "../hook/useFetchWithErrorHandling";

function Main() {
  const { data: products, error, isLoading } = useFetchWithErrorHandling(`${process.env.REACT_APP_SERVER_URL}`);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <>{products && products.map((value) => <Products key={value.product_id} {...value} />)}</>;
}

export default Main;
