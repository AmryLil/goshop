import React from "react";

const RegisterForm = ({
  firstnameref,
  lastnameref,
  usernameref,
  emailref,
  passwordref,
  confrimPaswwordref,
  handleSignup,
}) => {
  return (
    <form method="POST" onSubmit={handleSignup}>
      <div className="text-center text-5xl font-bold text-purple-950 mb-4">
        Create Your Account
      </div>
      <div className="flex flex-col w-full rounded-sm p-4 text-purple-950">
        <div className="flex flex-row gap-x-3">
          <div className="basis-1/2">
            <label htmlFor="firstname" className="pl-2 font-semibold">
              First Name
            </label>
            <input
              ref={firstnameref}
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Your firstname"
              className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="basis-1/2">
            <label htmlFor="lastname" className="pl-2 font-semibold">
              Last Name
            </label>
            <input
              ref={lastnameref}
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Your Lastname"
              className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <label htmlFor="username" className="pl-2 font-semibold">
          Username
        </label>
        <input
          ref={usernameref}
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-3"
        />
        <label htmlFor="email" className="pl-2 font-semibold">
          Email
        </label>
        <input
          ref={emailref}
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-3"
        />
        <div className="flex flex-row gap-x-3">
          <div className="basis-1/2">
            <label htmlFor="password" className="pl-2 font-semibold">
              Password
            </label>
            <input
              ref={passwordref}
              id="password"
              name="password"
              type="password"
              placeholder="********"
              className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-3"
            />
          </div>
          <div className="basis-1/2">
            <label htmlFor="confirm_password" className="pl-2 font-semibold">
              Confirm Password
            </label>
            <input
              ref={confrimPaswwordref}
              id="confirm_password"
              name="confirm_password"
              type="password"
              placeholder="********"
              className="w-full border rounded-md pl-2 pr-4 py-2 focus:border-purple-950 focus:outline-none focus:shadow-outline mb-3"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-red-900 to-red-800 py-2 rounded-md shadow-md hover:outline-2 mt-2 mb-1 hover:border text-lg font-semibold text-slate-100"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
