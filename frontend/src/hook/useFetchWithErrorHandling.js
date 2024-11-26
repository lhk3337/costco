import { useState, useEffect } from "react";

const useFetchWithErrorHandling = (url, options) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(typeof url);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null); // 기존 에러 초기화
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
};

export default useFetchWithErrorHandling;
