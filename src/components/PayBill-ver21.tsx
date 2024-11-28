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
import LPGPayComponent from "./utility/LPGPayComponent";
import WaterPayComponent from "./utility/WaterPayComponent";
import ElectricityPayComponent from "./utility/ElectricityPayComponent";
import MobilePostPaidComponent from "./utility/MobilePostPaidComponent";
import LandLinePayComponent from "./utility/LandLInePayComponent";
import BroadbandPayComponent from "./utility/BroadbandPayComponent";
import CableTVPayComponent from "./utility/CableTVPayComponent";

function PayBill2() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center font-extrabold text-green-600">
          Pay Bill 2
        </h1>
        <Tabs className="flex flex-col shadow-xl  border-green-300 border-1 p-5">
          <TabList className="flex gap-2 justify-center mb-3">
            <Tab className="">
              <p className="p-9 bg-slate-600 text-white uppercase font-semibold rounded-md hover:rounded-xl">
                {" "}
                Utility Payments
              </p>
            </Tab>
            <Tab className="">
              <p className="p-9 bg-rose-600 text-white uppercase font-semibold hover:rounded-xl">
                {" "}
                Recharge Payments{" "}
              </p>
            </Tab>

            <Tab className="">
              <p className="p-9 bg-yellow-600 text-white uppercase font-semibold hover:rounded-xl">
                {" "}
                Insurance Payments{" "}
              </p>
            </Tab>
            <Tab className="">
              <p className="p-9 bg-orange-600 text-white uppercase font-semibold hover:rounded-xl">
                Loan Payments
              </p>
            </Tab>
            <Tab className="">
              <p className="p-9 bg-stone-600 text-white uppercase font-semibold hover:rounded-xl">
                Other Payments
              </p>
            </Tab>
          </TabList>
          {/* Utility  Tab Panel */}
          <TabPanel style={{ fontSize: "20px", margin: "20px" }}>
            {/* Utility Tabs */}
            <Tabs defaultIndex={2}>
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
          {/* Recharge Tabs */}

          <TabPanel style={{ fontSize: "20px", margin: "20px" }}>
            <Tabs>
              <TabList>
                <Tab style={{ background: "#f5e5f8", borderRadius: "5px" }}>
                  Nested-Tab21
                </Tab>
                <Tab style={{ background: "#f2f9a0", borderRadius: "5px" }}>
                  Nested-Tab22
                </Tab>
                <Tab style={{ background: "#f5e5f8", borderRadius: "5px" }}>
                  Nested-Tab23
                </Tab>
              </TabList>
              <TabPanel>
                <p style={{ color: "blue" }}>Welcome to GeeksforGeeks</p>
              </TabPanel>
              <TabPanel>
                <p style={{ color: "blue" }}>
                  A computer science portal for geeks.
                </p>
              </TabPanel>
              <TabPanel>
                <p style={{ color: "blue" }}>Also known as GFG</p>
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel style={{ fontSize: "20px", margin: "20px" }}>
            <Tabs>
              <TabList>
                <Tab style={{ background: "#f5e5f8", borderRadius: "5px" }}>
                  Nested-Tab31
                </Tab>
                <Tab style={{ background: "#f2f9a0", borderRadius: "5px" }}>
                  Nested-Tab32
                </Tab>
                <Tab style={{ background: "#f5e5f8", borderRadius: "5px" }}>
                  Nested-Tab33
                </Tab>
              </TabList>
              <TabPanel>
                <p style={{ color: "blue" }}>Welcome to GeeksforGeeks</p>
              </TabPanel>
              <TabPanel>
                <p style={{ color: "blue" }}>
                  A computer science portal for geeks.
                </p>
              </TabPanel>
              <TabPanel>
                <p style={{ color: "blue" }}>Also known as GFG</p>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default PayBill2;
