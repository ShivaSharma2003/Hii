import React from "react";
import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <section className="h-[100vh] w-[100vw] bg-white flex justify-center items-center">
        <form className="w-[30%] h-[60%] border-2 border-gray-600 bg-white shadow-lg flex flex-col justify-center items-center py-6 px-2 rounded-md ">
          <div className="font-bold text-2xl ">Login to your Account</div>
          <div className="flex flex-col w-full px-4 py-2 ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="outline-none px-4 py-2 border-2 border-gray-400 shadow-lg rounded-lg "
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col w-full px-4 py-2 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="outline-none px-4 py-2 border-2 border-gray-400 shadow-lg rounded-lg "
              placeholder="password"
            />
          </div>
          <div className="flex flex-col px-4 py-2 ">
            <button className="px-4 py-2 border-2 border-green-950 rounded-lg font-bold text-white bg-green-600 ">
              Login Account
            </button>
          </div>
          <div className="flex flex-col px-4 py-2 ">
            <h2>
              Don't have an account?{" "}
              <span
                className="cursor-pointer font-bold "
                onClick={() => {
                  navigate("/register/account");
                }}
              >
                Register
              </span>{" "}
              here
            </h2>
          </div>
        </form>
      </section>
    </>
  );
}
