import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const authUser = async (userData,endPoint) => {
  const response = await axios.post(`${API_URL}/${endPoint}`, userData,{withCredentials: true});
  return response.data;
};
