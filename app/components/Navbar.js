"use client";
import "../globals.css";
import Link from "next/link";
import React, { useContext } from "react";
import NoteContext from "../Context/NoteContext";
import { CgProfile } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";
// import Logo from 'next/cartLogo.webq'
const Navbar = () => {
  const abc = useContext(NoteContext);
  return (
    <header
      className="text-white header bg-green-600 z-10 flex justify-center body-font fixed w-[100vw] mx-auto shadow-lg md:px-4 px-1"
      style={{ backgroundColor: "#f85606" }}
    >
      <div className="contner mx-auto flex flex-wrap md:px-5 py-2 flx-col md:flex-row items-center justify-between w-[100%]">
        <Link
          href="/users/Home"
          className="flex title-font font-medium items-center text-gray-900  "
        >
          <span className="logo md:ml-3 font-bold text-yellow-300 md:text-2xl ">
            ALI's MART
          </span>
        </Link>
        <form className="form md:w-[40%]">
          {/* <div className="relative"> */}
          <div className="flex  relative rounded-lg w-full">
            <input
              type="search"
              id="default-search"
              className="block border-none rounded-lg outline-none w-full px-2 py-1 pe-10 text-md text-black w-100%"
              style={{ letterSpacing: "2px" }}
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm absolute end-0 px-3 bg-gray-200  h-full"
            >
              {" "}
              <svg
                className="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
            {/* </div> */}
          </div>
        </form>
        <nav className="flex gap-2 flex-wrap items-center text-base justify-center">
          <div className="flex items-center">
            <Link
              href="/users/Signin"
              className="sinLink md:mr-4 flex text-sm items-center gap-1 p-1 hover rounded-lg "
            >
              <CgProfile className="h-[25px] w-[22px]" /> Login
            </Link>
            |
            <Link
              href="/users/Register"
              className="regLink md:mx-4 flex text-sm hover py-2 px-1 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
          <button className="lang mr-5 hover font-bold md:flex p-1 rounded-lg items-center gap-1">
            <GrLanguage /> EN <span className=" text-xs pt-[3px]">v</span>
          </button>
          <Link
            href="/users/Cart"
            className="md:mr-5 hover:text-gray-900 oveflow-hidden text-4xl relative"
          >
            <img
              src="/cartLogo.webp"
              alt="Cart"
              className="not cart md:w-[2.6rem] md:h-[2.6rem]"
            />
            <span className="count bg-rd-600 font-bold text-white rounded-xl px-1 absolute md:text-lg md:right-[30%] md:top-[-7%] ">
              {abc?.Count?.length}
            </span>
          </Link>
        </nav>
        <form className="form2 md:w-[40%] mx-auto hidden">
          <div className="flex  relative rounded-lg w-full">
            <input
              type="search"
              id="default-search"
              className="block border-none rounded-lg outline-none w-full px-2 py-1 pe-10 text-md text-black w-100%"
              style={{ letterSpacing: "2px" }}
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm absolute end-0 px-3 bg-gray-200  h-full"
            >
              {" "}
              <svg
                className="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
