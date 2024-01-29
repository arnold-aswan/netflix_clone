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
      <Link to={user ? "/showcase" : "/"}>
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
            <button className="bg-netflixred text-white px-3 md:px-5 py-2 rounded-md font-bold ">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
