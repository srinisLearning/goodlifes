// components/Form.js
'use client'
import { useState } from 'react';
import Image from 'next/image'

const BroadbandPayComponent = () => {
  const [formData, setFormData] = useState({
    selectOption: '',
    inputField1: '',
    inputField2: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
<div className="flex gap-10 justify-center">
  <div>
    <Image
      src="/images/broadband_pay.png"
      alt="Broadband Pay"
      width={600}
      height={400}
    />
  </div>
  <div className="flex flex-col my-auto shadow-2xl">
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
      Pay
    </div>
    {/* Form Here */}
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto px-12 bg-white  rounded-lg m-6"
    >
      <div className="mb-4">
        <label
          htmlFor="selectOption"
          className="block text-xs uppercase font-medium text-gray-700"
        >
          Select Operator
        </label>
        <select
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-green-300 rounded-md focus:outline-none focus:ring focus:border-green-aaa"
        >
          <option value="1" className='border border-solid border-green-300 text-sm uppercase'>Select An Option</option>
          <option value="2">Airtel Post Paid [Fetch & Pay]</option>
          <option value="3">Jio Post Paid [Fetch & Pay]</option>
          <option value="4">BSNL Mobile Post Paid</option>
          <option value="5">Vi Post Paid [Fetch & Pay]</option> 
          <option value="6">MTNL Mumbai Dolphin</option> 
         
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="inputField1"
          className="block text-xs uppercase font-medium text-gray-700"
        >
                      Consumer Number
        </label>
        <input
          type="text"
          name="Landline Number"
          value={formData.inputField1}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Mobile Number"
          className="block text-xs uppercase font-medium text-gray-700"
        >Payee Mobile Number
        </label>
        <input
          type="text"
          name="mobile-number"
          value={formData.inputField1}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
      </div>

     

      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600  uppercase"
      >
        Fetch Bill
      </button>
    </form>
  </div>
</div>
</>
   
  );
};

export default BroadbandPayComponent

