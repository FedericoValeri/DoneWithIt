import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    // 1. Call the server and control the loading animation
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // 2. Show error if occurs
    if (!response.ok) {
      console.log("response is false");
      return setError(true);
    }
    // 3. In case we don't have any errors
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
