import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.178.26:9000/api/",
  timeout: 10000,
});

// Override get method to use cache
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  // Store data in the cache
  if (response.ok) {
    console.log("DATA CACHED");
    cache.store(url, response.data);
    return response;
  }
  // If call to server failed (server offline or no internet connection)
  // we look for data in the cache
  const data = await cache.get(url);
  console.log("Connection error, data fetched from cache.");
  return data ? { ok: true, data } : response;
};

export default apiClient;
