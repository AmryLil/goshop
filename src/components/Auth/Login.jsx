import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="container h-screen flex flex-row shadow-xl rounded-md relative">
        <motion.div
          className="w-1/2 p-6 h-full flex items-center justify-center shadow-md flex-col absolute transition-all ease-out"
          id="formlg"
          initial={{ x: 450, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={"/"}>
            <IoArrowBackCircle
              size={50}
              className="absolute text-red-800 self-start self cursor-pointer top-5 left-4 z-50"
            />
          </Link>
          <div className="flex justify-center items-center flex-col mt-8">
            <div className="block text-5xl font-bold text-purple-950">
              Login to Your Account
            </div>
            <div className="font-light text-lg my-3 text-purple-900">
              Login using social network
            </div>
            <div className="flex gap-x-2 justify-center items-center text-4xl">
              <button
                type="button"
                className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: "#333" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
              <button
                type="button"
                className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: "#1877f2" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button
                type="button"
                className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: "#c13584" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </div>
            <div className="text-lg font-light mb-4">or</div>
          </div>
          <form
            id="formlogin"
            method="POST"
            className="flex flex-col w-full rounded-sm p-4 text-purple-950"
          >
            <label htmlFor="username" className="pl-2 font-semibold text-xl">
              Username
            </label>
            <input
              name="username"
              id="username"
              type="text"
              placeholder="Your Username"
              className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-4"
            />
            <label htmlFor="pas" className="pl-2 font-semibold text-xl">
              Password
            </label>
            <input
              name="password"
              id="pas"
              type="password"
              placeholder="********"
              className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-4"
            />
            <div className="flex px-2 flex-row justify-between">
              <div>
                <input type="checkbox" id="Remember" />
                <label htmlFor="Remember" className="font-normal pl-1 text-sm">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-base font-semibold">
                Forget password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-red-800 to-red-900 py-2 rounded-md shadow-md hover:outline-2 mt-2 mb-2 hover:border text-lg font-semibold text-slate-100 text-center"
            >
              Sign in
            </button>
          </form>
        </motion.div>
        <motion.div
          className="w-1/2 h-full bg-gradient-to-r from-red-800 to-red-900 shadow-md text-purple-900 flex flex-col p-5 absolute transition-all ease-out"
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
