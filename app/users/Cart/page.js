"use client";
import React, { useContext, useState } from "react";
import NoteContext from "../../Context/NoteContext"; // Import the NoteContext
import { MdDelete } from "react-icons/md";
const Page = () => {
  const [refresh, setRefresh] = useState(false);
  const a = useContext(NoteContext); // Access the NoteContext
  const uniqueNames = [...new Set(a?.Count?.map((item) => item[1]))];
  const uniqueObjects = uniqueNames.map((Itm) =>
    a?.Count?.find((item) => item[1] === Itm)
  );

  return a.Count.length !== 0 ? (
    <div className="w-full md:px-12 max-w-7xl mx-auto pt-4 mt-[2rem] pb-4 min-h-[85vh]">
      <h1 className="md:text-4xl text-2xl  font-medium md:ps-12 ps-4">
        Shopping Cart
      </h1>
      <button
        title="Delete all your items"
        onClick={() => a.setCount([])}
        className="md:ps-12 ps-3 hover:underline text-red-600 mt-2"
      >
        Clear Cart?
      </button>
      <br />
      <br />
      {uniqueObjects?.map((item) => {
        return (
          <div
            key={Math.random()}
            className="flex m-auto w-full sm:p-1 between justify-center items-center container"
          >
            <div className=" sm:w-[80%] w-full items-center justify-center mx-auto flex border-b">
              <div className="flex px-2 w-full justify-start">
                <div className="flex justify-center items-center">
                  <div className=" w-[70px] h-[80px]  py-1 flex justify-center items-center overflow-hidden">
                    <img
                      src={item[2]}
                      alt="Image"
                      className="overflow-hidden object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-3 md:pl-8 pl-3 justify-around -[70%]">
                  <h1 className="font-bod lg:text-2xl md:text-xl sm:text-lg text-sm">
                    {item[1]}
                  </h1>
                  <div className="relative flex w-full md:w-[80%] justify-between items-center">
                    <h1 className="text-xs sm:text-sm">
                      Price: {item[0].toLocaleString()}
                    </h1>
                    <div className="flex text-xs sm:text-sm sm:ml-6 items-center">
                      <span className="">QTY:</span>
                      <span>{a?.quantity[item[1]]}</span>
                    </div>
                    <button
                      onClick={() => {
                        a?.removeFromCart(item[1], item[0]);
                        setRefresh(Math.random());
                      }}
                      title="Delete one item"
                      className="border sm:text-sm text-xs border-red-600 text-red-600 sm:px-2  p-1 rounded"
                    >
                      {MdDelete} Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex mt-4 flex-col-reverse justify-between md:flex-row">
        <button
          disabled
          title="Payment coordination is not enable yet"
          className="p-1 mx-auto h-8 rounded-md px-1 w-max bg-red-500 text-white"
        >
          Proceed To Checkout
        </button>
        <h1 className="text-end md:text-2xl text-lg p-2">
          SubTotal
          <span>
            <span className="text-base">({a?.Count?.length} Items)</span> : Pkr{" "}
            {(!a?.price == 0 ? a?.price : 0).toLocaleString()}
          </span>
        </h1>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center sm:mt-12 mt-5 sm:min-h-[80vh] min-h-[85vh]">
      <h2 className="text-3xl text-center">Your Cart is empty!</h2>
      <img
        src="/emptyCart.webp"
        alt="EmptyCart"
        className="not md:w-[25rem] md:h-[25em] "
      />
    </div>
  );
};

export default Page;
