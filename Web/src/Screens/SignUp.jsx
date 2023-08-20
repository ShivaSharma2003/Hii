import React, { useState } from "react";
import { useNavigate } from "react-router";
import { registerAction } from "../Redux/Actions/authAction";

export default function SignUp() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    registerAction(email, userName, password, fullName);
    console.log("register button clicked");
    setuserName("");
    setfullName("");
    setpassword("");
    setemail("");
    setconfirmPassword("");
  };

  return (
    <>
      <section className="h-[100vh] w-[100vw] bg-white flex justify-center items-center">
        <form className="w-[30%] border-2 border-gray-600 bg-white shadow-lg flex flex-col justify-start items-center py-6 px-2 rounded-md ">
          <div className="font-bold text-2xl ">Register New Account</div>
          <div className="flex flex-col w-full px-4 py-2 sapce-y-2 ">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              className="outline-none px-4 py-2 border-2 border-gray-400 shadow-lg rounded-lg "
              placeholder="username"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full px-4 py-2 ">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="outline-none px-4 py-2 border-2 border-gray-400 shadow-lg rounded-lg "
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full px-4 py-2 ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="outline-none px-4 py-2 border-2 border-gray-400 shadow-lg rounded-lg "
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full px-4 py-2 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="outline-none px-4 py-2 border-2 border-gray-400 shadow-lg rounded-lg "
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full px-4 py-2 ">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="outline-none px-4 py-2 border-2 border-gray-400 shadow-lg rounded-lg "
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col px-4 py-2 ">
            <button
              className="px-4 py-2 border-2 border-green-950 rounded-lg font-bold text-white bg-green-600 "
              onClick={(e) => registerUser(e)}
              disabled={
                userName === "" ||
                fullName === "" ||
                password === "" ||
                email === "" ||
                confirmPassword === "" ||
                confirmPassword !== password
              }
            >
              Register Account
            </button>
          </div>
          <div className="flex flex-col px-4 py-2 ">
            <h2>
              Already have an account?{" "}
              <span
                className="cursor-pointer font-bold "
                onClick={() => {
                  navigate("/login/account");
                }}
              >
                Log in{" "}
              </span>{" "}
              here
            </h2>
          </div>
        </form>
      </section>
    </>
  );
}
