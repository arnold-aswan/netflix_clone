import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/showcase");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full">
        <img
          className=" sm:block absolute w-full h-full object-cover"
          src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt="background image"
        />
        <div className="bg-black/65 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 rounded-md ">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold  ">Sign In</h1>

              <form
                onSubmit={handleSubmit}
                className="w-[300px] mx-auto flex flex-col py-4 ">
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
                <button className="btn-red ">Sign In</button>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="py-4">
                  <span className="text-gray-600">New to Netflix? </span>
                  <Link to="/signup" className="hover:underline">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
