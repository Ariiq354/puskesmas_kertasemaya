import Banner from "@/components/banner";
import Image from "next/image";

export default function Inovasi() {
  return (
    <>
      <Banner title="Inovasi Puskesmas" />
      <div className="container flex flex-wrap justify-center my-6 gap-2">
        <Image
          src="/inovasi.webp"
          alt=""
          width={1000}
          height={1000}
          className="w-[70%] h-auto"
        ></Image>
        <Image
          src="/kebuli2.webp"
          alt=""
          width={1000}
          height={1000}
          className="w-[70%] h-auto"
        ></Image>
        <Image
          src="/kebuli.webp"
          alt=""
          width={1000}
          height={1000}
          className="w-[70%] h-auto"
        ></Image>
      </div>
    </>
  );
}
