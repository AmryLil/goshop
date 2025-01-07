import { useState } from 'react';
import { fetchUnsplash } from '../services/fecthunsplash';

export const useBrandSection = () => {
  const [sweatersProduct, setSweatersProduct] = useState([]);
  const [error2, setError] = useState(null);

  const handleFetchDataUnsplash = async () => {

    try {
      const response = await fetchUnsplash({
        params: { query: "sweater", per_page: 8 },
        headers: {
          Authorization:
            "Client-ID tIeMoCq3YeT4wlxAAUCreWJMrDvKqcRkzBzt1XYfDCU",
        },
      });
      setSweatersProduct(response.results);
      console.log(response)

    } catch (err) {
      setError("No products found in the specified category.");
      console.log(err);
    }
  };

  return {
    sweatersProduct,
    error2,
    handleFetchDataUnsplash
  };
};
