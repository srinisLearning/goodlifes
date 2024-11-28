// components/Form.js
"use client";
import { useState } from "react";
import Image from "next/image";

const LPGPayComponent = () => {
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
        <div className="flex justify-center items-center">
          <Image
            src="/images/lpg-bill-online.png"
            alt="LPG Payment"
            width={600}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center shadow-xl my-auto">
          <div>
            <Image
              src="/images/bbps-2.png"
              alt="LPG Payment"
              width={75}
              height={50}
              className="rounded-lg shadow-lg m-3 mx-auto"
            />
          </div>
          <div className="flex justify-center text-sm bg-green-600 text-white  font-bold uppercase my-1">
            LPG Pay
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto px-12 bg-white rounded-lg m-6"
          >
            <div className="mb-4">
              <label
                htmlFor="Customer Account Number"
                className="block text-xs font-medium text-gray-700 uppercase"
              >
                Customer Account Number
              </label>
              <input
                type="text"
                name="inputField1"
                value={formData.inputField1}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-green-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="Payee Mobile Number"
                className="block text-xs font-medium text-gray-700 uppercase"
              >
                Payee Mobile Number
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
              className="w-full justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-white bg-green-600 uppercase"
            >
              Fetch Bill
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LPGPayComponent;
