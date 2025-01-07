import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../services/auth';

export const useLogin = () => {
  const usernameref = useRef(null);
  const passwordref = useRef(null);
  const [error, setError]=useState([])

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = usernameref.current.value;
    const password = passwordref.current.value;

    try {
      const response = await authUser({
        username,
        password,
      },"login");
      navigate('/');
      console.log(response.data);
    } catch (err) {
      console.log('Login gagal');
      console.log(err.response.data);
      setError(err.response.data)
    }
  };

  return {
    usernameref,
    passwordref,
    handleLogin,
    error
  };
};
