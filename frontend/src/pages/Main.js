import { useEffect, useState } from "react";
import Products from "../components/Products";

function Main() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_SERVER_URL);
      const result = await response.json();
      setIsLoading(false);
      setProducts(result);
    }
    fetchData();
  }, []);

  return <>{isLoading ? "loading" : products.map((value) => <Products key={value.product_id} {...value} />)}</>;
}

export default Main;
