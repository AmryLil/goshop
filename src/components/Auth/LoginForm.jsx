import React from "react";

const LoginForm = ({ usernameref, passwordref, handleLogin, error }) => {
  return (
    <form
      id="formlogin"
      method="POST"
      onSubmit={handleLogin}
      className="flex flex-col w-full rounded-sm p-4 text-purple-950"
    >
      <label htmlFor="username" className="pl-2 font-semibold text-xl">
        Username
      </label>
      <input
        ref={usernameref}
        name="username"
        id="username"
        type="text"
        placeholder="Your Username"
        className={`w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-4 ${
          error.code === 404 && "border-red-500"
        }`}
      />
      <label htmlFor="pas" className="pl-2 font-semibold text-xl">
        Password
      </label>
      <input
        ref={passwordref}
        name="password"
        id="pas"
        type="password"
        placeholder="********"
        className={`w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-4 ${
          error.code === 400 && "border-red-500"
        }`}
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
      <div>
        <p className="text-red-600 text-sm pl-3">{error && error.message}</p>
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-red-800 to-red-900 py-2 rounded-md shadow-md hover:outline-2 mt-2 mb-2 hover:border text-lg font-semibold text-slate-100 text-center"
      >
        Sign in
      </button>
      <div className="md:hidden">
        <div className="text-center">
          <span>Don't Have an account?</span>
          <span className="font-bold text-blue-600"> Register</span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
