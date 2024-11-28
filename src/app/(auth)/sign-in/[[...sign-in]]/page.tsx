import React from "react";

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center m-3">
          <SignIn />
        </div>
        <div className="flex justify-center items-center m-3">
          
          <Image
            src="/images/login.png"
            alt="Login"
            width={600}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
