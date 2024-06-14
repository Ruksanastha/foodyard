import React from "react";
import logo from "/logo.png";

import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul class="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>khana</a>
            </li>
            <li>
              <a>Newari</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Service</summary>
          <ul class="p-2">
            <li>
              <a>Online order</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out navbar">
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" className="h-16" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">{navItems}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="btn bg-primaryBG rounded-full text-black px-6  py-2  text-2xl  gap-2 hidden lg:flex items-center">
            <BsCart4 />
          </button>

          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-red rounded-full text-white px-6   flex items-center gap-2"
          >
            <FaRegUser />
            Login
          </button>
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;