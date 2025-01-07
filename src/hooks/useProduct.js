import { useState } from 'react';
import { fetchDummy } from '../services/fetchdummyjson';

export const useProduct = (id) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    console.log("jalan")
    try {
      const response = await fetchDummy(`${id}`);
      console.log(response)
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    product,
    error,
    handleFetchData
  };
};
