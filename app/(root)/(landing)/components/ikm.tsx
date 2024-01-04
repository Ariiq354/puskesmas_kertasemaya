import Image from "next/image";
import React from "react";

export default function Ikm() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-wrap flex-row items-center align-middle justify-center max-w-5xl h-full py-20 gap-14 md:gap-20 px-10">
        <Image
          className="flex flex-initial rounded-lg object-cover shadow-2xl border-black border-solid bord h-auto"
          src="/ikm_1.jpg"
          width={300}
          height={300}
          alt=""
        />
        <Image
          className="flex flex-initial rounded-lg object-cover shadow-2xl h-auto"
          src="/ikm_2.jpg"
          width={300}
          height={300}
          alt=""
        />
      </div>
    </div>
  );
}
