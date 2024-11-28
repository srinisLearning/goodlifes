// components/Form.js
"use client";
import { useState } from "react";
import Image from "next/image";

const DTHPayComponent = () => {
  const [formData, setFormData] = useState({
    selectOption: "",
    inputField1: "",
    inputField2: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
<div className="flex gap-10 justify-center">
  <div>
    <Image
      src="/images/dth_pay.png"
      alt="LPG Payment"
      width={600}
      height={400}
    />
  </div>
  <div className="flex flex-col  shadow-2xl">
    <div>
      <Image
        src="/images/bbps-2.png"
        alt="Gas Payment"
        width={100}
        height={50}
        className="rounded-lg shadow-lg m-3 mx-auto"
      />
    </div>
    <div className="flex justify-center text-sm bg-green-600 text-white  font-bold uppercase my-1">
      DTH Pay
    </div>
    <form
      onSubmit={handleSubmit}
      className="mx-auto px-14 bg-white  rounded-lg m-6 max-w-3xl"
    >
      <div className="mb-4">
        <label
          htmlFor="selectOption"
          className="block text-xs uppercase font-medium text-gray-700"
        >
          Select DTH Operator
        </label>
        <select
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border text-xs border-green-300 rounded-md focus:outline-none focus:ring focus:border-green-aaa"
        >
          <option value="" className='border border-solid border-green-300 text-sm uppercase'>Select An Option</option>
          <option value="1">SUN NXT DTH</option>
          <option value="2">AIRTEL DTH</option>
          <option value="3">DISH TV</option>
          <option value="4">TATA SKY</option>
          <option value="5">VIDEOCON D2H</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="inputField2"
          className="block text-xs uppercase font-medium text-gray-700"
        >
          Enter Viewing Card Number
        </label>
        <input
          type="text"
          name="inputField2"
          value={formData.inputField2}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
      >
        Fetch Bill
      </button>
    </form>
    {/* Form Here */}
  </div>
</div>
</>
   
  );
};

export default DTHPayComponent;
