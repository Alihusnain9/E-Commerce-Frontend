"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signin = () => {
  const [err, setErr] = useState(null);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  // console.log(err);
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/users/Home");
    // try {
    //   const postData = await fetch(
    //     `https://e-commerece-back.onrender.com/api/users?email=${value.email}`,
    //     {
    //       // headers: {
    //       //   "content-type": "application/json",
    //       // },
    //     }
    //   );
    //   const response = await postData.json();
    //   setErr(response);
    //   // if (response.jwt) {
    //   //   // setToken(true)
    //   //   setValue({
    //   //     email: "",
    //   //     password: "",
    //   //   });
    //   //   setTimeout(() => {
    //   //     // setToken(false)
    //   //     router.push('/users/Signin')
    //   //   }, 3000);
    //   // } else {}
    // } catch (err) {
    // }
  };
  return (
    <div class="animate-plse min-h-[90vh] bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12 min-w-md ">
      <div className="max-w-md mx-auto h-100%">
        <div class="border md:text-3xl sm:text-2xl text-xl  text-yellow-800 px-2 bg-white min-w-full mx-auto rounded-t-md py-4 sm:px-10 text-center">
          Sign In To Your Account
        </div>
        <div class="border min-w-full relative px-4 pt-7 pb-8 bg-white shadow-xl max-w-md mx-auto sm:px-10 rounded-b-md">
          <form onSubmit={handleSubmit}>
            <label for="" class="block">
              Email
            </label>
            <input
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              value={value.email}
              type="Email"
              class="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="Username or Email"
              required
            />
            <label for="" class="block">
              Password
            </label>
            <input
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              value={value.password}
              type="password"
              class="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="password"
            />
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="text-sm ml-3">
                  <label for="remember" class="font-medium text-gray-900">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="#"
                class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
              >
                forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              class="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold md:px-14 px-5 py-2 md:py-3 rounded"
            >
              Login
            </button>
          </form>
          <br />
          <h2>
            Don't Have An Account?
            <Link href="/users/Register" className="text-blue-600">
              Register
            </Link>{" "}
            Here
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signin;
