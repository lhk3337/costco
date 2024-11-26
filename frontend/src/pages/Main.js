import { useEffect, useState } from "react";
import Products from "../components/Products";

function Main() {
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        const response = await fetch(process.env.REACT_APP_SERVER_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProducts(result);
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

  return <>{products && products.map((value) => <Products key={value.product_id} {...value} />)}</>;
}

export default Main;
