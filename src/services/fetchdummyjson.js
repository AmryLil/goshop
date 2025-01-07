import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchDummy = async (endPoint) => {
  const response = await axios.get(`${API_URL}/${endPoint}`);
  return response;
};
