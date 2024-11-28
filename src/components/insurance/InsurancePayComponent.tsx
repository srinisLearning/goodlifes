// components/Form.js
'use client'
import { useState } from 'react';
import Image from 'next/image';

const InsurancePaymentComponent = () => {
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
      src="/images/insurance_pay_bill.png"
      alt="LPG Payment"
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
      Insurance Payment
    </div>
    {/* Form Here */}
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto px-12 bg-white rounded-lg m-6"      
    >
        <div className="mb-4">
        <label
          htmlFor="selectOption"
          className="block text-xs uppercase font-medium text-gray-700"
        >
          Select Your Insurance Type
        </label>
        <select
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
          className="block w-full mt-1 p-2 text-xs border border-green-300 rounded-md focus:outline-none focus:ring focus:border-green-aaa"
        >
          <option value="" className='border border-solid border-green-300 text-sm uppercase'>Select An Option</option>
          <option value="1">Insurance</option>
          <option value="2">Health Insurance</option>
          <option value="3">Life Insurance</option>
          <option value="4">Vehical Insurance</option> 
         
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="selectOption"
          className="block text-xs uppercase font-medium text-gray-700"
        >
          Select Your Insurance Provider
        </label>
        <select
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
          className="block w-full mt-1 p-2 text-xs border border-green-300 rounded-md focus:outline-none focus:ring focus:border-green-aaa"
        >
          <option value="" className='border border-solid border-green-300 text-sm uppercase'>Select An Option</option>
          <option value="1">Axis Finance</option>
          <option value="2">Bajaj Auto Finance</option>
          <option value="3">Aditya Brila Housing</option>
          <option value="4">Adani Capital</option> 
         
        </select>
      </div>

      

      

      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
      >
        Fetch Bill
      </button>
    </form>
  </div>
</div>
</>
    
  
  );
};

export default InsurancePaymentComponent

