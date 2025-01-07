import { useState } from 'react';
import { fetchDummy } from '../services/fetchdummyjson';

export const usePromoSection = () => {
  const [diskonsproducts, setDiskonsproducts] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    console.log("jalan")
    try {
      const response = await fetchDummy("category/furniture");
      console.log(response)
      if (response.data.products.length === 0) {
        setError("No products found in the specified category.");
      } else {
        setDiskonsproducts(response.data.products.slice(0, 4));
        console.log(diskonsproducts)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    diskonsproducts,
    error,
    handleFetchData
  };
};
