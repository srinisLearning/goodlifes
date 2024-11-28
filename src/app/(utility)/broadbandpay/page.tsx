import React from "react";

import UtilityLinks from "@/components/UtilityLinks";

import Image from "next/image";
import PayBill from "@/components/PayBill";

import BroadbandPayComponent from "@/components/utility/BroadbandPayComponent";

const BroadbandPay = () => {
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
            src="/images/broadband_pay.png"
            alt="Broadband Pay"
            width={600}
            height={400}
            className="rounded-lg  m-3"
          />
        </div>
        <div className="shadow-2xl m-2 rounded-xl">
        <div className="flex flex-col my-auto">
          <div>
            <Image
              src="/images/bbps-2.png"
              alt="BBPS"
              width={100}
              height={50}
              className="rounded-lg shadow-lg m-3 mx-auto"
            />
          </div>
          <div className="flex justify-center text-sm bg-green-600 text-white  font-bold uppercase my-1">
            Broadband Pay
          </div>
          <div>
            <BroadbandPayComponent />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BroadbandPay;
