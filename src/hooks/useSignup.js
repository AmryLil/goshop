import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../services/auth';

export const useSignup = () => {
  const firstnameref = useRef(null);
  const lastnameref = useRef(null);
  const usernameref = useRef(null);
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const confrimPaswwordref = useRef(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const firstname = firstnameref.current.value;
    const lastname = lastnameref.current.value;
    const username = usernameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;
    const confirmPaswword = confrimPaswwordref.current.value;

    try {
      const response = await authUser({
        firstname,
        lastname,
        username,
        email,
        password,
        confirm_password: confirmPaswword,
      },"register");
      navigate('/login');
      console.log(response);
    } catch (err) {
      console.log('Register gagal');
      console.log(err);
    }
  };

  return {
    firstnameref,
    lastnameref,
    usernameref,
    emailref,
    passwordref,
    confrimPaswwordref,
    handleSignup,
  };
};
