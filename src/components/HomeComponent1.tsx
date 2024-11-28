import React from "react";
import Image from "next/image";

const HomeComponent1 = () => {
  return (
    <>
      <div className="flex justify-around items-center">
        <div className="flex max-w-xl">
          <Image
            src="/images/woman-home-removebg.png"
            alt="Home1"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col max-w-md justify-center m-2">
          <div className="flex justify-center max-w-sm  text-center">
            <Image
              src="/images/welcome-bg.png"
              alt="Home2"
              width={100}
              height={75}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="justify-center text-center max-w-md">
            <div className="text-3xl text-center font-bold p-3 max-w-lg text-brown-aaa">
              {" "}
              Pay your bill
            </div>
            <div className="text-xl text-center max-w-lg">
              Electricity, Water, LPG, Gas, Mobile, Landline, DTH, Broadband,
              Cable TV, Insurance, Loan, Hospital, Credit Card{" "}
            </div>
            <div className="text-3xl text-center font-bold p-3 max-w-lg text-brown-aaa">
              {" "}
              Get Cash Backs{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent1;
