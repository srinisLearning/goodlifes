 'use client'
import React from "react";
import { Tabs, Panel, Tab, TabList, PanelList } from '@react-tabtab-next/tabtab';
import UtilityLinks from "@/components/UtilityLinks";
import RechargeLinks from "@/components/RechargeLinks";
import InsuranceLinks from "@/components/InsuranceLinks";
import LoanLinks from "@/components/LoanLinks";
import OtherLinks from "./OtherLinks";

 

const PayBillHome = () => {
  return (
    <>
    <div className="flex  max-w-4xl mx-auto m-3 gap-3 min-w-min border-y-large border-double border-green-900">
    <Tabs>
            <TabList>
               <Tab><span className="uppercase font-bold text-orange-600 ">Utility Bill Pay</span></Tab> 
               <Tab><span className="uppercase font-bold text-blue-600 ">RECHARGE Bill Pay</span></Tab>
                <Tab><span className="uppercase font-bold text-amber-400 ">Insurance Bill Pay</span></Tab>
                <Tab><span className="uppercase font-bold text-pink-600 ">Loan Bill Pay</span></Tab>
                <Tab><span className="uppercase font-bold text-stone-600 ">Others</span></Tab>
            </TabList>
            <PanelList>
                <Panel><UtilityLinks /></Panel>
                <Panel><RechargeLinks /></Panel>
                <Panel><InsuranceLinks /></Panel>
                <Panel><LoanLinks /></Panel>
                <Panel><OtherLinks /></Panel>
            </PanelList>
        </Tabs>
        </div>

    </>
     
  )
}

export default PayBillHome
 
 