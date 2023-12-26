"use client";
import Image from "next/image";
import Slider from "../../components/Slider";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Featured from "../../components/Featured";
import Mobile from "../../components/Mobile";
import { CircularProgress } from "@mui/material";
const page = () => {
  const [rsponse, setRsponse] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://e-commerece-back.onrender.com/api/products?populate=*",
        {
          cache: "no-store",
          headers: {
            Authorization:
              "Bearer 5ed3ecc4cf9facb159481b5efaeee569954a39f4df7821e5be0243e371fe118d6abad4d62cc8a049549659ab101764d77a37e74fa0a3926e7123501a212e5caba86b2836eeac904e3321137c2bc44a9b71315bac3eb517357f90c94a5e6754eb360cdaff73f50efb06d64fcd6a110411f7bfeccc08ba6ff812f2018306c1874f",
          },
        }
      );
      const response = await data.json();
      setRsponse(response);
    };
    getData();
  }, []);

// let text = item?.attributes?.PName


  return (
    <section className=" text-black bg-gray-100 body-font overflow-hidden">
      <Slider />
      <div className=" max-w-6xl cotainer md:p-0 sm:p-2 mx-auto z-10">
        <h1 className="xl:text-6xl text-2xl title-font p-3">
          Popular Products
        </h1>
       {rsponse? <div className="grid lg:grid-cols-4 lg:px- sm:grid-cols-3 md:px- justify-center gap-2 w-full grid-cols-2">
          {rsponse?.data &&
            rsponse?.data.map((item) => {
              return (
                <Link
                  key={Math.random()}
                  href={`/users/${item?.attributes?.UName}`}
                  className="sm:min-w-[250px min-w-[150px] bg-white p-2 cursor-pointer shadow"
                >
                  <div className="md:h-[200px] sm:h-[170 h-[150px] flex items-center justify-center">
                    <div className="sm:w-[150px w-[120px] flex items-center justify-center">
                      <img
                        alt="ProductImage"
                        className="obect-cover object-center my-auto"
                        src={
                          item?.attributes?.PImage?.data &&
                          // "http://localhost:1337" +
                            item.attributes?.PImage?.data[0].attributes.formats
                              .thumbnail.url
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-4 border-t">
                    <h1 className="text-black sm:text-l text-sm tracking-widest sm:title-font  mb-1">
                      {(item?.attributes?.PName).substring(0,25)}
                    </h1>
                    <h6 className="mt-1 sm:text-s text-xs text-gray-600">
                      Rs. {(item?.attributes?.price).toLocaleString()}
                    </h6>
                  </div>
                </Link>
              );
            })}
        </div>:<div className="w-full h-[60vh] flex items-center justify-center">
      <CircularProgress />
    </div>}
        <br />
        <Featured products={rsponse} />
        <br />
        <Mobile/>
      </div>
    </section>
  );
};
export default page;
