import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function TentangKami() {
  return (
    <div className=" w-full h-full py-20 md:pb-24 md:pt-48 flex justify-center">
      <div className="w-full h-full max-w-full grid lg:grid-cols-2 lg:px-[4%]">
        <div className="flex px-10 justify-center items-center lg:pr-5">
          <Image
            className="rounded-lg"
            src="/tentang_kami.jpeg"
            width={800}
            height={800}
            alt=""
          />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="flex pb-3 gap-2">
              <div className="gap-8 px-10">
                <h1 className="text-xl mb-2 mt-10 lg:mt-0">Tentang Kami</h1>
                <h1 className="font-bold text-4xl ">
                  UPTD Puskesmas Kertasemaya
                </h1>
                <p className="text-justify lg:text-lg py-10 md:py-15">
                  UPTD Puskesmas Kertasemaya adalah Unit Pelaksana Teknis Dinas
                  Kabupaten Indramayu yang bertempat di Kecamatan Kertasemaya,
                  Jl. By Pass Tulungagung dengan wilayah kerja meliputi 13 desa,
                  yaitu{" "}
                  <b>
                    Desa Tulungagung, Desa Kertasemaya, Desa Kliwed, Desa
                    Sukawera, Desa Jengkok, Desa Lemah Ayu, Desa Manguntara,
                    Desa Tegalwirangrong, Desa Tenajar Kidul, Desa Tenajar, Desa
                    Tenajar Lor, Desa Jambe, dan Desa Larangan Jambe.
                  </b>{" "}
                  Puskesmas kami adalah Puskesmas Perdesaan dan juga termasuk
                  puskesmas non rawat inap. Kami selalu berupaya memberikan
                  pelayanan prima dengan sepenuh hati bagi para pengguna layanan
                  kami.
                </p>

                <a href="/profil">
                  <Button className="transition-all bg-red-800 hover:translate-y-[-0.5rem] hover:bg-red-600 font-bold">
                    Informasi Lebih Lengkap
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
