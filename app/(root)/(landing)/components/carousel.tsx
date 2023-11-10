import Link from "next/link";

import { AiFillPlayCircle } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className="w-full section_top lg:h-[50rem] h-[40rem] md:h-[45rem] bg-cover">
        <div className="w-full md:pl-24 h-full bg-gradient-to-r from-red-500 flex flex-col justify-center md:items-start items-center gap-4">
          <h1 className="md:text-5xl text-4xl font-bold text-center flex md:justify-start justify-start text-white w-[50%] md:w-[40%] lg:w-full pb-4">
            Selamat Datang di
          </h1>
          <h1 className="md:text-5xl text-4xl font-bold text-center flex md:justify-start justify-start text-white w-[50%] md:w-[40%] lg:w-full pb-4">
            UPTD Puskesmas Kertasemaya
          </h1>
          <h1 className="md:text-2xl text-lg font-bold text-center flex md:justify-start justify-start text-white w-[50%] md:w-[40%] lg:w-full pb-4">
            Web informasi, Data, Edukasi dan Umpan balik Kertasemaya
          </h1>
          <h1 className="flex gap-6 items-center md:flex-row flex-col justify-center">
            <Link href="https://webskrining.bpjs-kesehatan.go.id/skrining/index.html">
              <Button className="bg-red-200 text-red-600 font-bold hover:bg-red-600 hover:text-white">
                Skrining BPJS Kesehatan
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger className="bg-red-900 border-white border-2 rounded-full p-1 text-white md:ml-6">
                <AiFillPlayCircle size={40} />
              </DialogTrigger>
              <DialogContent className="w-[64vw] md:h-[36vw]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QT1pgLjK4iI"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </DialogContent>
            </Dialog>
            <div className="text-white">Tonton Kami</div>
          </h1>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col gap-4 mt-4 lg:absolute p-4 lg:translate-y-[-200px] lg:translate-x-[80px]">
          <div className="bg-red-200 text-red-600 p-4 flex flex-col gap-4">
            <div className="font-bold text-xl flex justify-between">
              <div>Layanan Call Center 24 Jam</div>
              <div>
                <Link href="https://wa.me/6282118894770" target="_blank">
                  <Image src="/whatsapp.png" width={30} height={30} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-red-200 text-red-600 flex-col flex p-12 font-bold">
            <div className="font-bold mb-4 text-2xl">Jam Pelayanan</div>
            <div className="flex gap-1 justify-between border-red-600 border-b-2 text-lg">
              <div>Senin – Kamis</div>
              <div>07.30 -14.00 WIB</div>
            </div>
            <div className="flex justify-between border-red-600 border-b-2 text-lg">
              <div>Jumat</div>
              <div>07.30 -11.30 WIB</div>
            </div>
            <div className="flex justify-between border-red-600 text-lg">
              <div>Sabtu</div>
              <div>07.30 -12.00 WIB</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
