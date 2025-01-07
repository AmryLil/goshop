import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';

export const fetchUnsplash = async (params) => {
  const response = await axios.get(`${API_URL}`,params);
  return response.data;
};
