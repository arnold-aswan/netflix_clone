import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import netflix from "../public/assets/netflix.png";
import avatar from "../public/assets/avatar.jpg";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="text-white flex items-center justify-between p-4 z-[100] w-full absolute lg:px-10">
      <Link to="/">
        <img src={netflix} alt="logo" className="w-[6rem] md:w-36" />
      </Link>
      {user?.email ? (
        <div className="flex items-end gap-4">
          <Link to="/profile">
            <button className="">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-md w-[2.5rem] md:w-16"
              />
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4"> Sign In</button>
          </Link>
          <Link to="signup">
            <button className="bg-netflixred px-3 py-1 md:px-6 md:py-2 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
