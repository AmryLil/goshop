import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/api';

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(';').shift();
    return cookieValue;
  } else {
    console.log(`Cookie ${name} not found`);
    return null;
  }
}

const token = getCookie('token');


const header_url = {
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  withCredentials: true
}

export const addToCart = async (userData) => {
  console.log('Sending data:', userData); 
  const response = await axios.post(`${API_URL}/addtocart`,userData,header_url);
  return response;
};

export const readCart = async ()=>{
  const response = await axios.get(`${API_URL}/cart`,header_url)
  return response;
}
export const deleteCart = async (id)=>{
  const response = await axios.get(`${API_URL}/deletecart/${id}`,header_url)
  return response;
}
