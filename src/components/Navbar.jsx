import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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
    <>
      <div className="flex flex-wrap items-center p-4 justify-between w-full z-10 absolute">
        <Link to="/">
          <h1 className=" text-red-600 uppercase text-2xl md:text-4xl font-bold cursor-pointer">
            Netplik
          </h1>
        </Link>
        {user?.email ? (
          <div>
            <Link to="/account">
              <button className="text-white pr-4 cursor-pointer text-base md:text-xl">
                Account
              </button>
            </Link>
            <button onClick={handleLogOut} className="rounded text-white bg-red-600 md:px-6 px-4 py-2 cursor-pointer text-base md:text-xl">
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="text-white pr-4 cursor-pointer text-base md:text-xl">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="rounded text-white bg-red-600 md:px-6 px-4 py-2 cursor-pointer text-base md:text-xl">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
