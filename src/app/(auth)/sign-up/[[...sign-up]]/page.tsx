import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return(
    <>
    <div className="flex flex-row justify-center">
      
      <div className="flex justify-center items-center m-3">
        
        <Image
          src="/images/signup.png"
          alt="Register"
          width={600}
          height={320}
        />
      </div>
      <div className="flex justify-center items-center m-3">
        <SignUp afterSignOutUrl={'/'} />
      </div>
    </div>
  </>
  )
;
}