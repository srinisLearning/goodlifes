"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GasPayComponent from "./utility/GasPayComponent";
import Image from "next/image";

import card from "/public/images/svg/card.svg";
import eletricity from "/public/images/svg/eletricity.svg";
import landphone from "/public/images/svg/landphone.svg";
import phone from "/public/images/svg/phone.svg";
import tv from "/public/images/svg/tv.svg";
import water from "/public/images/svg/water.svg";
import mobileapp from "/public/images/svg/mobile-app.svg";
import waterpng from "/public/images/png/water.png";
import lpg from "/public/images/png/lpg.png";
import gas from "/public/images/png/gas.png";
import mobilepostpaid from "/public/images/png/mobile.png";
import electricity from "/public/images/png/electricity.png";
import broadband from "/public/images/png/broadband.png";
import landline from "/public/images/png/landline.png";
import cabletv from "/public/images/png/cabletv.png";
import creditcard from "/public/images/png/creditcard.png";
import emi from "/public/images/png/emi.png";
import subscription from "/public/images/png/subscription.png";
import insurance from "/public/images/png/insurance.png";
import teacher from "/public/images/png/teacher.png";
import hospital from "/public/images/png/hospital.png";
import mobilepng from "/public/images/png/mobile.png";
import dth from "/public/images/png/dth.png";

import LPGPayComponent from "./utility/LPGPayComponent";
import WaterPayComponent from "./utility/WaterPayComponent";
import ElectricityPayComponent from "./utility/ElectricityPayComponent";
import MobilePostPaidComponent from "./utility/MobilePostPaidComponent";
import LandLinePayComponent from "./utility/LandLInePayComponent";
import BroadbandPayComponent from "./utility/BroadbandPayComponent";
import CableTVPayComponent from "./utility/CableTVPayComponent";
import DTHPayComponent from "./recharge/DTHPayComponent";
import MobilePrePaidComponent from "./recharge/MobilePrePaidComponent";
import CCPayComponent from "./loan/CCPayComponent";
import EmiPayComponent from "./loan/EmiPayComponent";
import EducationComponent from "./other/EducationComponent";
import SubscriptionComponent from "./other/SubscriptionComponent";
import HospitalComponent from "./other/HospitalComponent";
import InsurancePaymentComponent from "./insurance/InsurancePayComponent";

function PayBill2() {
  let defaultTab = 0
  return (
    <>
      <div className="mx-auto max-w-7xl">
       
        <Tabs
          className="flex flex-col shadow-xl  border-lime-300 border-1 p-5"
          defaultIndex={defaultTab}
        >
          <TabList className="flex gap-2 justify-center mb-3 shadow-sm p-3 font-mono text-white uppercase  ">
            <Tab className="">
              <p className="p-9 bg-gradient-to-t from-indigo-300 from-16% to-indigo-950  rounded-3xl hover:rounded-none text-white uppercase">
                Utility Payments
              </p>
            </Tab>
            <Tab className="">
              <p className="p-9 bg-gradient-to-b from-rose-300 to-rose-950 from-16%  rounded-3xl hover:rounded-none">
                Recharge Payments
              </p>
            </Tab>

            <Tab className="">
              <p className="p-9 bg-gradient-to-t from-teal-300 to-teal-950 from-16%  rounded-3xl hover:rounded-none">
                Loan Payments
              </p>
            </Tab>
            <Tab className="">
              <p className="p-9 bg-gradient-to-b from-orange-300 to-orange-950 from-16% rounded-3xl hover:rounded-none">
                Insurance Payments
              </p>
            </Tab>
            <Tab className="">
              <p className="p-9  bg-gradient-to-t from-cyan-300 to-cyan-950 from-16%  rounded-3xl hover:rounded-none">
                Other Payments
              </p>
            </Tab>
          </TabList>
          {/* Utility  Tab Panel */}
          <TabPanel className="">
            {/* Utility Tabs */}
            <Tabs defaultIndex={0} className='flex flex-col shadow-xl  border-lime-300 border-1'>
              <TabList className="flex text-sm font-semibold gap-4 uppercase justify-center text-center">
                <Tab className="">
                  <Image
                    src={gas}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  Gas
                </Tab>
                <Tab className="">
                  <Image
                    src={lpg}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  LPG
                </Tab>
                <Tab className="">
                  <Image
                    src={water}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  Water
                </Tab>
                <Tab className="">
                  <Image
                    src={electricity}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  Electricity
                </Tab>
                <Tab className="">
                  <Image
                    src={mobilepostpaid}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  Mobile Post Paid
                </Tab>
                <Tab className="">
                  <Image
                    src={landline}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  Land Line
                </Tab>
                <Tab className="">
                  <Image
                    src={broadband}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  BroadBand
                </Tab>
                <Tab className="">
                  <Image
                    src={cabletv}
                    alt="GasPay"
                    width={75}
                    height={75}
                    className="text-green-ccc p-3"
                  />
                  Cable TV
                </Tab>
              </TabList>
              <hr />
              <TabPanel>
                <GasPayComponent />
              </TabPanel>
              <TabPanel>
                <LPGPayComponent />
              </TabPanel>
              <TabPanel>
                <WaterPayComponent />
              </TabPanel>
              <TabPanel>
                <ElectricityPayComponent />
              </TabPanel>
              <TabPanel>
                <MobilePostPaidComponent />
              </TabPanel>
              <TabPanel>
                <LandLinePayComponent />
              </TabPanel>
              <TabPanel>
                <BroadbandPayComponent />
              </TabPanel>
              <TabPanel>
                <CableTVPayComponent />
              </TabPanel>
            </Tabs>
          </TabPanel>
          {/* End Utility  Tab Panel */}

          {/* Recharge Tabs */}

          <TabPanel className="" >
            <Tabs className="flex flex-col shadow-xl  border-lime-300 border-1">
              <TabList className="flex font-semibold gap-4 uppercase justify-center items-center">
                <Tab className="text-center">
                  <Image
                    src={mobilepng}
                    alt="Mobile Prepaid"
                    width={75}
                    height={75}
                    className="flex justify-center text-green-ccc p-3"
                  />
                  Mobile Prepaid
                </Tab>
                <Tab className="text-center">
                  <Image
                    src={dth}
                    alt="DTH"
                    width={75}
                    height={75}
                    className="flex justify-center text-green-ccc p-3r"
                  />
                  DTH
                </Tab>
              </TabList>
              <hr />
              <TabPanel>
                <MobilePrePaidComponent />
              </TabPanel>
              <TabPanel>
                <DTHPayComponent />
              </TabPanel>
            </Tabs>
          </TabPanel>
          {/* End Recharge Tabs */}

          {/* Loan Payment Tabs */}

          <TabPanel className=" ">
            <Tabs className="flex flex-col shadow-xl  border-lime-300 border-1">
              <TabList className="flex font-semibold gap-4 uppercase justify-center items-center">
                <Tab className="text-center">
                  <Image
                    src={creditcard}
                    alt="Mobile Prepaid"
                    width={75}
                    height={75}
                    className="flex justify-center text-green-ccc p-3 text-center"
                  />
                  Credit Card
                </Tab>
                <Tab className="text-center">
                  <Image
                    src={emi}
                    alt="DTH"
                    width={75}
                    height={75}
                    className="flex justify-centertext-green-ccc p-3 text-center"
                  />
                  EMI
                </Tab>
              </TabList>
              <hr />
              <TabPanel>
                <CCPayComponent />
              </TabPanel>
              <TabPanel>
                <EmiPayComponent />
              </TabPanel>
            </Tabs>
          </TabPanel>
          {/* End Loan Payment Tabs */}
          {/* Insurance Payment Tabs */}
          <TabPanel className="">
            <Tabs className="flex flex-col shadow-xl  border-lime-300 border-1">
              <TabList className="flex font-semibold gap-4 uppercase justify-center items-center">
                <Tab className="">
                  
                </Tab>
              </TabList>
              <TabPanel>
                <InsurancePaymentComponent />
              </TabPanel>
            </Tabs>
          </TabPanel>
          {/* Other Payment Tabs */}
          <TabPanel className="">
            <Tabs className="flex flex-col shadow-xl  border-lime-300 border-1 ">
              <TabList className="flex text-sm font-semibold gap-4 uppercase justify-center items-center ">
                <Tab className="text-center">
                  <Image
                    src={teacher}
                    alt="Mobile Prepaid"
                    width={75}
                    height={75}
                    className="flex justify-center text-green-ccc p-3 text-center"
                  />
                  Education
                </Tab>
                <Tab className='text-center'>
                  <Image
                    src={subscription}
                    alt="DTH"
                    width={75}
                    height={75}
                    className="flex justify-centertext-green-ccc p-3 text-center"
                  />
                  Subscription
                </Tab>
                <Tab>
                  <Image
                    src={hospital}
                    alt="DTH"
                    width={75}
                    height={75}
                    className="flex justify-centertext-green-ccc p-3 text-center"
                  />
                  Hospital
                </Tab>
              </TabList>
              <hr />
              <TabPanel>
                <EducationComponent />
              </TabPanel>
              <TabPanel>
                <SubscriptionComponent />
              </TabPanel>
              <TabPanel>
                <HospitalComponent />
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default PayBill2;
