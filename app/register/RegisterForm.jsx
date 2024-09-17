import React from "react";

const RegisterForm = () => {
  return (
    <>
      <form className="max-w-full flex flex-col text-xl xl:text-2xl">
        <div className="mb-5 ">
          <label
            for="email"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(+66)"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  mb-4"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white  bg-red-500 font-medium rounded-xl mx-auto w-24 h-10 md:w-36 md:h-16 "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
