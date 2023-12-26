"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
const Register = () => {
  const [err, setErr] = useState();
  const [token, setToken] = useState(false);
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    secPassword: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = await fetch(
        "https://e-commerece-back.onrender.com/api/auth/local/register",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );
      const response = await postData.json();
      // console.log(response);
      setErr(response);
      if (response.jwt) {
        setToken(true);
        setValue({
          username: "",
          email: "",
          password: "",
          secPassword: "",
        });
        setTimeout(() => {
          setToken(false);
          router.push("/users/Signin");
        }, 3000);
      } else {
      }
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-grey-lighter min-h-[85vh] py-6 mt-6 flex flex-col"
    >
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white sm:px-6 py-8 rounded sm:shadow-md text-black w-full">
          <h1 className="mb-8 sm:text-3xl text-2xl text-center">
            Create Your Account
          </h1>
          {err?.error?.message ? (
            <span className="text-sm text-red-600">
              *{err?.error?.message}.
            </span>
          ) : (
            ""
          )}
          {err?.jwt && token ? (
            <span className="text-sm text-green-600">
              *You have been registered successfully.
            </span>
          ) : (
            ""
          )}
          <input
            required
            value={value.username}
            onChange={(e) => {
              setValue({ ...value, username: e.target.value });
            }}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            required
            value={value.email}
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            value={value.password}
            onChange={(e) => {
              setValue({ ...value, password: e.target.value });
            }}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            required
          />
          <input
            value={value.secPassword}
            onChange={(e) => {
              setValue({ ...value, secPassword: e.target.value });
            }}
            required
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <div className="flex items-center ">
            <input
              id="checked-checkbox"
              type="checkbox"
              className="cursor-pointer w-5 h-5 text-blue-600 bg-blue-600 borer-gray-300  rounded-lg focus:ring-blue-500"
            />
            <label
              for="checked-checkbox"
              className="cursor-pointer ms-2 text-sm font-medium"
            >
              I agree to the term of services and privacy policy
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link className="text-blue-600" href="/users/Signin">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
