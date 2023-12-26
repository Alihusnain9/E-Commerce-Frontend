"use client";
import Similar from "../../../components/Similar";
import Featured from "../../../components/Featured";
import NoteContext from "../../../Context/NoteContext";
import { CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
const page = ({ params }) => {
  const abc = useContext(NoteContext);
  const [rsponse, setRsponse] = useState();
  const [index, setIndex] = useState(1);
  const [imgNumber, setImgNumber] = useState(0);
  if (index < 1) {
    setIndex(1);
  }

  const increment = () => {
    setIndex(index + 1);
  };
  const decrement = () => {
    setIndex(index - 1);
  };
  // setTimeout(() => {
  //   setIndex(1);
  // }, 900);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://e-commerece-back.onrender.com/api/products?filters[UName]=${params.Item}&populate=*`,
        {
          cache: "no-store",
          headers: {
            Authorization:
              "Bearer 5ed3ecc4cf9facb159481b5efaeee569954a39f4df7821e5be0243e371fe118d6abad4d62cc8a049549659ab101764d77a37e74fa0a3926e7123501a212e5caba86b2836eeac904e3321137c2bc44a9b71315bac3eb517357f90c94a5e6754eb360cdaff73f50efb06d64fcd6a110411f7bfeccc08ba6ff812f2018306c1874f",
          },
        }
      );
      const response = await data.json();
      setRsponse(response.data[0]);
    };
    getData();
  }, []);
  return (
    <div className="bg-gray-100">
      <section className="text-gray-600  body-font py-5 overflow-hidden">
        {rsponse ? (
          <div className="py-2 flex mx-auto">
            <div className=" justiy-center items-enter column flex-row bg-white mx-auto px-3 py-5 container flex">
              <div className="lg:min-w-[400px] direction md:min-w-[300px] sm:min-w-[230px] min-w-[200px]">
                <img
                  alt="ecommerce"
                  className="object-cover lg:min-w-[270px] md:min-w-[230px] sm:min-w-[160px] min-w-[120px] not object-center rounded mx-auto"
                  src={`${rsponse?.attributes?.PImage?.data[imgNumber]?.attributes?.formats?.thumbnail?.url}`}
                />
                <br />
                <div className="flex gap-3 dir ">
                  {rsponse?.attributes?.PImage?.data.map((img, index) => {
                    return (
                      <img
                        key={index}
                        onClick={() => setImgNumber(index)}
                        src={img?.attributes?.formats?.thumbnail?.url}
                        alt="abc"
                        className={`cursor-pointer md:max-w-[4rem] max-w-[4rem] max-h-[4rem] md:max-h-[4rem] hover:border-red-600 border-2 py-1  ${
                          index == imgNumber ? "border-red-600" : "border"
                        }`}
                        // style={{ borderColor: "#f85606" }}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="lg:px-5 lg:pl-10">
                <h1 className="text-black itemh1 lg:text-3xl md:text-2xl sm:text-xl text-lg title-font font-mediu mb-1 ">
                  {rsponse?.attributes?.PName}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span> */}
                </div>
                <p className="leading-relaxed md:text-base sm:text-sm text-[13px]">
                  {rsponse?.attributes?.PDescription}
                </p>
                <div>
                  <span className="text-black">
                    Brand :{" "}
                    {rsponse?.attributes?.brand
                      ? rsponse?.attributes?.brand
                      : "No Brand"}
                  </span>
                  <br />
                  <span className="text-black">Availibilty : InStock</span>
                </div>
                <div className="flex sm:gap-4 gap-2 md:flex-row flex-col md:mt-6 md:items-center pb-5 md:mb-5">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rs. {rsponse?.attributes?.price?.toLocaleString()}
                  </span>

                  <div className="flex items-center">
                    <span className="mr-3">Quantity</span>
                    <div className="flex gap-3 font-bold text-xl border select-none">
                      <button
                        onClick={decrement}
                        style={{ backgroundColor: "#f85606" }}
                        className="px-2 text-white"
                      >
                        -
                      </button>
                      <span>{index}</span>
                      <button
                        onClick={increment}
                        style={{ backgroundColor: "#f85606" }}
                        className="px-2 text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <button
                    style={{ backgroundColor: "#f85606" }}
                    onClick={() => {
                      abc.addToCart(
                        rsponse?.attributes?.price,
                        index,
                        rsponse?.attributes?.PName,
                        // "http://localhost:1337" +
                        rsponse?.attributes?.PImage?.data[0]?.attributes
                          ?.formats?.thumbnail?.url
                      );
                    }}
                    className="flex text-white border-0 py-2 px-6 focus:outline-none text-xs sm:text-sm"
                  >
                    Add To Cart
                  </button>
                  <Link href='/users/Cart'>
                  
                  <button
                    onClick={() => {
                      abc.addToCart(
                        rsponse?.attributes?.price,
                        index,
                        rsponse?.attributes?.PName,
                        // "http://localhost:1337" +
                        rsponse?.attributes?.PImage?.data[0]?.attributes
                          ?.formats?.thumbnail?.url
                      );
                    }}
                    style={{ backgroundColor: "#f85606" }}
                    className="flex text-white sm:text-sm text-xs border-0 py-2 px-6 focus:outline-none "
                  >
                    Buy Now
                  </button>
                  </Link>
                  {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-[60vh] flex items-center justify-center">
            <CircularProgress />
          </div>
        )}
        <br />
        <Similar category={rsponse?.attributes?.category} />
        <br />
        <Featured />
      </section>
    </div>
  );
};

export default page;
