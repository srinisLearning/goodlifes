import Image from "next/image";
<>
<div className="flex gap-10 justify-center">
  <div>
    <Image
      src="/images/cc_pay.png"
      alt="LPG Payment"
      width={600}
      height={400}
    />
  </div>
  <div className="flex flex-col my-auto shadow-2xl">
    <div>
      <Image
        src="/images/bbps-2.png"
        alt="Gas Payment"
        width={100}
        height={50}
        className="rounded-lg shadow-lg m-3 mx-auto"
      />
    </div>
    <div className="flex justify-center text-sm bg-green-600 text-white  font-bold uppercase my-1">
       Credit Card Payment
    </div>
    {/* Form Here */}
  </div>
</div>
</>;
