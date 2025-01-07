import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import axios from "axios";
import SocialButtons from "../components/Auth/SocialButtons";
import LoginForm from "../components/Auth/LoginForm";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { usernameref, passwordref, handleLogin, error } = useLogin();

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="container h-screen flex flex-row shadow-xl rounded-md relative">
        <motion.div
          className="md:w-1/2 w-full p-6 h-full flex items-center justify-center shadow-md flex-col absolute transition-all ease-out "
          id="formlg"
          initial={{ x: 450, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={"/"}>
            <IoArrowBackCircle
              size={50}
              className="hidden md:block absolute text-red-800 self-start self cursor-pointer top-5 left-4 z-50"
            />
          </Link>
          <div className="block text-5xl  font-bold text-purple-950 text-center md:mb-0 mb-5">
            Enter Your Account
          </div>
          <div className="font-light text-lg my-3 text-purple-900">
            Login using social network
          </div>
          <SocialButtons />
          <h6>or</h6>
          <LoginForm
            usernameref={usernameref}
            passwordref={passwordref}
            handleLogin={handleLogin}
            error={error}
          />
        </motion.div>
        <motion.div
          className="w-1/2 h-full bg-gradient-to-r from-red-800 to-red-900 shadow-md text-purple-900 md:flex flex-col p-5 absolute transition-all ease-out hidden"
          id="login"
          initial={{ x: 0, opacity: 0.5 }}
          animate={{ x: 640, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-center px-16 h-full justify-self-center jus">
            <div className="text-5xl font-bold text-slate-100 mb-10 text-center">
              New Here?
            </div>
            <div className="text-slate-100 mb-5 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              molestiae pariatur impedit laboriosam amet obcaecati voluptate.
            </div>
            <Link to={"/signup"}>
              <button className="py-2 px-14 shadow-md rounded-full bg-slate-100 font-semibold">
                Sign Up
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
