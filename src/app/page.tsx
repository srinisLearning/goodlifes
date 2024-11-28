import HomeComponent1 from "@/components/HomeComponent1";
import PayBillHome from "@/components/PayBillHome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="">
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-full min-h-screen mb-2"
      src="/images/home_1.png"
      alt="Good Lifes"      
      width={1280}
      height={610}
      priority
    />
  </div>
  <div className="">
    <HomeComponent1 />
  </div>
  <div className="border rounded-full border-1 border-dashed border-green-600 m-6 mt-12 p-6 w-screen mx-auto bg-gradient-to-b from-lime-300 from-33% to-lime-700 ">
    <h3 className="text-xl uppercase text-center font-semibold">Our Services</h3>
    <PayBillHome />
    <Link href='/paybill'>
    <button className="flex justify-center p-3 rounded-3xl mx-auto text-center bg-white text-green-600 uppercase">Pay Your Bills Now</button>
    </Link>
  </div>
  <div className="flex m-2 p-2">
  <Image
      className=" w-screen"
      src="/images/home_3.jpg"
      alt="Good Lifes"      
      width={1280}
      height={610}
      priority
    />
  </div>
  <div className="flex m-2 p-2">
    <Image
      className=" w-screen"
      src="/images/home_4.png"
      alt="Good Lifes"      
      width={1200}
      height={400}
      priority
    />
  </div>
  

  
  
  
 

  </>
    
  );
}
