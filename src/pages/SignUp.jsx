import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt="background image"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w[450px] h-[600px] mx-auto bg-black/75 ">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold  ">Sign Up</h1>

              <form
                className="w-full flex flex-col py-4 "
                onSubmit={handleSubmit}>
                <input
                  className="p-3 my-2 bg-gray-700 rounded-md"
                  type="email"
                  autoComplete="email"
                  placeholder="email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded-md"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button className="bg-red-600 py-3 my-6 rounded-md font-bold ">
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="py-4">
                  <span className="text-gray-600">
                    Already subscribed to Netflix{" "}
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
