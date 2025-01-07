import React from "react";
import { motion } from "framer-motion";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import RegisterForm from "../components/Auth/SignupForm";
import SocialButtons from "../components/Auth/SocialButtons";

const Register = () => {
  const {
    firstnameref,
    lastnameref,
    usernameref,
    emailref,
    passwordref,
    confrimPaswwordref,
    handleSignup,
  } = useSignup();

  return (
    <div className="w-screen h-full flex justify-center items-center overflow-hidden">
      <div className="container w-full flex flex-row shadow-xl rounded-md h-screen relative">
        <motion.div
          className="md:w-1/2 bg-gradient-to-r from-red-900 to-red-800 shadow-md text-purple-900 md:flex flex-col  px-5 py-5 absolute h-full  z-10 transition-all ease-out hidden"
          initial={{ x: 640, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={"/"}>
            <IoArrowBackCircle
              size={50}
              className="text-slate-50 self-start self cursor-pointer absolute top-4 left-5"
            />
          </Link>
          <div className="flex flex-col justify-center items-center px-16 h-full justify-self-center jus">
            <div className="text-5xl font-bold text-slate-100 mb-10 text-center">
              Have Account?
            </div>
            <div className="text-slate-100 mb-5 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              molestiae pariatur impedit laboriosam amet obcaecati voluptate.
            </div>
            <Link to={"/login"}>
              <button className="py-2 px-14 shadow-md rounded-full bg-slate-100 font-semibold">
                Sign in
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full p-6 h-full md:flex pt-10 items-center justify-center shadow-md right-0 flex-col z-0 absolute transition-all ease-out  "
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <RegisterForm
            firstnameref={firstnameref}
            lastnameref={lastnameref}
            usernameref={usernameref}
            emailref={emailref}
            passwordref={passwordref}
            confrimPaswwordref={confrimPaswwordref}
            handleSignup={handleSignup}
          />
          <div className="font-medium text-base mb-2 text-purple-900 text-center">
            Sign up with social network
          </div>
          <SocialButtons />
          <div className="md:hidden">
            <div className="text-center">
              <span>You Have an account?</span>
              <span className="font-bold text-blue-600"> Login</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
