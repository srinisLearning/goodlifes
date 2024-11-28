"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
import mobilepng from "/public/images/png/mobile.png";
 
import dthpng from "/public/images/png/dth.png";

 

const data = [
  {
    id: 1,
    href: "mobileprepaid",
    iconSrc: mobilepng,
    iconAlt: "icon",
    text: "Mobile PrePaid",
  },
 
  {
    id: 2,
    href: "dthpay",
    iconSrc: dthpng,
    iconAlt: "icon",
    text: "DTH",
  },
   
 
];

const RechargeLinks = () => {
  const pathName = usePathname();

  return (
    <>
     
    <div className="flex gap-12 p-4">
      {data.map(({ id, href, iconSrc, iconAlt, text }) => (
       
          <span className="icon">
         
            <Image src={iconSrc} alt={iconAlt} width= {75}  height={75} className='text-green-500' />
            <span className="text-green-950 text-xs font-semibold uppercase flex justify-center gap-2">{text}</span>
          </span>
          
       
      ))}
    </div>
    </>
  );
};

export default RechargeLinks;
