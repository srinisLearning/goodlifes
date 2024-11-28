import React from "react";

import UtilityLinks from "@/components/UtilityLinks";
 
import LPGPayComponent from "@/components/utility/LPGPayComponent";
import Image from "next/image";
import PayBill from "@/components/PayBill";
import LandLinePayComponent from "@/components/utility/LandLInePayComponent";

const LandlinePay = () => {
  return (
    <>
    <div>
     
     <div className="flex justify-center p-6 m-3">
       <PayBill />
     </div>
    </div>
   
      <div className="flex gap-6 mx-auto justify-center min-h-max items-center">
        <div>
          <Image
            src="/images/landline_pay_bill.png"
            alt="Landline Post Paid"
            width={600}
            height={400}
            className="rounded-lg  m-3"
          />
        </div>
        <div className="shadow-2xl m-2 rounded-xl min-w-11">
        <div className="flex flex-col my-auto">
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
            Landline Pay Bill
          </div>
          <div>
            <LandLinePayComponent />
          </div>
        </div>
      </div>
      </div>
       
    </>
  );
};

export default LandlinePay;
