import React from "react";

import UtilityLinks from "@/components/UtilityLinks";
 
import LPGPayComponent from "@/components/utility/LPGPayComponent";
import Image from "next/image";
import PayBill from "@/components/PayBill";

const LPGPay = () => {
  return (
    <>
    <div>
     
     <div className="flex justify-center p-6 m-3">
       <PayBill />
     </div>
    </div>
    <hr />
      <div className="flex gap-6 mx-auto justify-center min-h-max items-center">
        <div>
          <Image
            src="/images/lpg-bill-online.png"
            alt="Gas Payment"
            width={600}
            height={400}
            className="rounded-lg shadow-lg m-3"
          />
        </div>
        <div className="shadow-2xl m-2 rounded-xl">
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
            LPG Pay
          </div>
          <div>
            <LPGPayComponent />
          </div>
        </div>
      </div>
      </div>
       
    </>
  );
};

export default LPGPay;
