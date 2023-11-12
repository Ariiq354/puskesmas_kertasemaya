import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export default function JadwalLayanan() {
  return (
    <div>
      <div className=" w-full h-full py-20 md:py-24 lg:py-28 flex justify-center">
        <div className="w-full h-full flex max-w-full gap-10 lg:gap-16 flex-wrap justify-center">
          <div className="flex px-10 justify-center items-center lg:pr-5">
            <Image
              className="rounded-lg"
              src="/puskesmas_header.jpg"
              width={600}
              height={600}
              alt=""
            />
          </div>

          <div className="flex justify-center md:pr-10 lg:pl-5 px-5">
            <div className="grid grid-rows-3 items-center">
              <div className="flex pb-[1%] gap-2">
                <AiFillCheckCircle color="rgb(239 68 68)" size="2rem" />
                <div>
                  <h1 className="font-bold text-md md:text-lg lg:text-xl">
                    Pelayanan Rawat Jalan
                  </h1>
                  Pemeriksaan Umum: Senin - Sabtu <br />
                  Pemeriksaan Kesehatan Gigi & Mulut: Senin - Kamis <br />
                  Pemeriksaan MTBS: Senin - Sabtu <br />
                </div>
              </div>

              <div className="flex pb-4 gap-2">
                <AiFillCheckCircle color="rgb(239 68 68)" size="2rem" />
                <div>
                  <h1 className="font-bold text-xl">Konseling Terpadu</h1>
                  KIA/ Ibu Hamil: Selasa & Sabtu <br />
                  IMS/HIV: Senin - Sabtu <br />
                  Jiwa: Selasa, Kamis, & Sabtu <br />
                </div>
              </div>

              <div className="flex gap-2">
                <AiFillCheckCircle color="rgb(239 68 68)" size="2rem" />
                <div>
                  <h1 className="font-bold text-xl">Lainnya</h1>
                  Laboratorium: Senin - Sabtu (Rabu di Pustu Tenajar)
                  <br />
                  Farmasi: Senin - Sabtu
                  <br />
                  Persalinan: 24 jam
                  <br />
                  Tindakan / UGD: 24 jam
                  <br />
                </div>
              </div>

              <a href="/pelayanan24">
                <Button className="transition-all bg-red-800 hover:translate-y-[-0.5rem] hover:bg-red-600 p-5 w-full md:w-[60%] font-bold mt-10 lg:mt-14 flex">
                  Jadwal Lengkap Pelayanan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
