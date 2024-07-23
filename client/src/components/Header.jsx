import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoCloseSharp } from "react-icons/io5";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";

const Header = () => {
  const [Open, setOpen] = useState(false);

  const toggle1 = () => {
    setOpen(!Open);
  };

  const [open, setopen] = useState(false);

  const toggle2 = () => {
    setopen(!open);
  };

  return (
    <nav className="">
      <div className="flex items-center px-10 py-5 lg:space-x-10">
        <div className="mr-5 inline-flex">
          <img width={250} src={logo} alt="" />
        </div>

        <div className="hidden w-full items-center justify-end space-x-10 lg:inline-flex">
          <Link to={"/"} className="">
            Home
          </Link>

          <button onClick={toggle2} className="relative">
            <div className="inline-flex items-center gap-2">
              Pages
              <span>
                {open ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </span>
            </div>
            <div
              className={`absolute left-0 top-[30px] z-10 flex w-[100px] flex-col items-start space-y-2 py-2 ${open ? "" : "hidden"} `}
            >
              <Link to={"/about"}>About Us</Link>
              <Link to={"/testimonials"}>Testimonials</Link>
            </div>
          </button>

          <Link to={"/products"} className="">
            Products
          </Link>
          <Link to={"/blogs"} className="">
            Blog
          </Link>
          <Link to={"/contact"} className="">
            Contacts
          </Link>
          <Link to={""} className="">
            <FaSearch />
          </Link>
          <Link to={""} className="">
            <FaShoppingCart />
          </Link>
          <Link to={"/signup"} className="">
            Sign Up
          </Link>
          <Link to={"/signin"} className="">
            Sign In
          </Link>
        </div>

        <button
          onClick={toggle1}
          className="ml-auto inline-flex items-center lg:hidden"
        >
          {Open ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div
        className={`mx-auto flex flex-col items-center space-y-2 px-10 py-2 lg:hidden ${Open ? "" : "hidden"
          } `}
      >
        <Link to={"/"} className="w-full text-center">
          Home
        </Link>

        <button onClick={toggle2} className=" ">
          <div className="inline-flex items-center gap-2">
            Pages
            <span>
              {open ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
            </span>
          </div>
          <div
            className={`flex flex-col items-center space-y-2 py-2 ${open ? "" : "hidden"} `}
          >
            <Link to={"/about"}>About Us</Link>
            <Link to={"/testimonials"}>Testimonials</Link>
          </div>
        </button>

        <Link to={"/products"} className="w-full text-center">
          Products
        </Link>
        <Link to={"/blogs"} className="w-full text-center">
          Blog
        </Link>
        <Link to={"/contact"} className="w-full text-center">
          Contacts
        </Link>
        <Link to={"/"} className="flex w-full justify-center">
          <FaSearch />
        </Link>
        <Link to={"/"} className="flex w-full justify-center">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
