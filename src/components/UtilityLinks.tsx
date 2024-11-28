"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import broadband from "/public/images/svg/broadband.svg";
import card from "/public/images/svg/card.svg";
import eletricity from "/public/images/svg/eletricity.svg";
import gas from "/public/images/svg/gas.svg";
import landphone from "/public/images/svg/landphone.svg";
import phone from "/public/images/svg/phone.svg";
import tv from "/public/images/svg/tv.svg";
import water from "/public/images/svg/water.svg";
import mobileapp from "/public/images/svg/mobile-app.svg";
import waterpng from "/public/images/png/water.png";
import lpgpng from "/public/images/png/lpg.png";
import gaspng from "/public/images/png/gas.png";
import mobilepng from "/public/images/png/mobile.png";
import electricitypng from "/public/images/png/electricity.png";
import broadbandpng from "/public/images/png/broadband.png";
import landlinepng from "/public/images/png/landline.png";
import cabletvpng from "/public/images/png/cabletv.png";
import creditcardpng from "/public/images/png/creditcard.png";

 

const data = [
  {
    id: 1,
    href: "/gaspay",
    iconSrc: gaspng,
    iconAlt: "icon",
    text: "Gas",
  },
  {
    id: 2,
    href: "/lpgpay",
    iconSrc: lpgpng,
    iconAlt: "icon",
    text: "LPG",
  },
  {
    id:3,
    href: "/waterpay",
    iconSrc: waterpng,
    iconAlt: "icon",
    text: "Water",
  },
  {
    id: 4,
    href: "/electricitypay",
    iconSrc: electricitypng,
    iconAlt: "icon",
    text: "Electricity",
  },
  {
    id: 5,
    href: "/mobilepostpaid",
    iconSrc: mobilepng,
    iconAlt: "icon",
    text: "Mobile",
  },  
  {
    id: 6,
    href: "/landlinepay",
    iconSrc: landlinepng,
    iconAlt: "icon",
    text: "Landline",
  },
  {
    id: 7,
    href: "/broadbandpay",
    iconSrc: broadbandpng,
    iconAlt: "icon",
    text: "Broadband",
  }, 
 
  {
    id: 8,
    href: "/cabletvpay",
    iconSrc: cabletvpng,
    iconAlt: "icon",
    text: "CableTv",
  },
 

  
 
 
];

const UtilityLinks = () => {
  const pathName = usePathname();

  return (
    <>
    {/* <h3 className="text-md mb-3 text-violet-800 uppercase font-bold text-md text-center underline underline-offset-6">Utility Bill Pay</h3> */}
    <div className="flex gap-8 p-4">
      
      {data.map(({ id, href, iconSrc, iconAlt, text }) => (
        
          <span className="icon">
          
            <Image src={iconSrc} alt={iconAlt} width= {75}  height={75} className='text-green-ccc' />
            <span className="text-green-950 text-xs font-semibold uppercase flex justify-center gap-2">{text}</span>
          </span>
          
        
      ))}
    </div>
    </>
  );
};

export default UtilityLinks;
