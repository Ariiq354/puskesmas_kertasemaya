import Image from "next/image";
import React from "react";

export default function Ikm() {
  const items = Array.from({ length: 8 }, (_, index) => index);
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex container flex-wrap flex-row items-center align-middle justify-center  h-full py-20 gap-14 md:gap-20 px-10">
        {items.map((item) => (
          <Image
            key={item}
            className="flex flex-initial rounded-lg object-cover shadow-2xl h-auto"
            src={`/ikm_${item + 1}.webp`}
            width={300}
            height={300}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
