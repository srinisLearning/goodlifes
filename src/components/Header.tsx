import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"

import {
  faAt,
  faMobileScreenButton,
 
  faGlobe,
  
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="flex flex-row  justify-around items-center my-3">
      <div>
          <Image
            src="/images/logo.png"
            alt="Good Lifes"
            width={200}
            height={150}
          />
        </div>
        <div className = "m-0">
          <Image
            src="/images/GoodLifes_utilitybillspay.png"
            alt="Good Lifes"
            width={180}
            height={60}
          />
        </div>
       
        <div className="flex flex-col gap-1">
         
            <div className="m-0">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="text-green-aaa" 
              size='xs'               
            /> &nbsp;
            <span className="text-zinc-900"> 
             98400 97531
             </span>
            </div>
            <div className="m-0">
            <FontAwesomeIcon icon={faAt} className="text-green-aaa" size = 'xs'  />  
            &nbsp;
            <span className="text-zinc-900"> 
            goodlifes@goodlifes.com
            </span>
            </div>
            <div className="m-0">
            <FontAwesomeIcon icon={faGlobe} className="text-green-aaa" size='xs' />  
            &nbsp;
            <span className="text-zinc-900"> 
            http://www.goodlifes.com
            </span>
            </div>
           
        </div>
      </div>
    </>
  );
};

export default Header;
