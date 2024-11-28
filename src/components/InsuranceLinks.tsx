"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
import insurancepng from "/public/images/png/insurance.png";
 
 

 

const data = [
  {
    id: 1,
    href: "utility/insurancepay",
    iconSrc: insurancepng,
    iconAlt: "icon",
    text: "Insurance",
  },
 
   
   
 
];

const InsuranceLinks = () => {
  const pathName = usePathname();

  return (
    <>
  
    <div className="flex gap-8 p-4 min-w-xl">
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

export default InsuranceLinks;
