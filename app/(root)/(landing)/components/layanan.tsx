import React from "react";
import { FaAmbulance, FaUserMd } from "react-icons/fa";
import {
  FaChild,
  FaFileMedical,
  FaLungsVirus,
  FaTooth,
  FaUserNurse,
} from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { IoWoman } from "react-icons/io5";

export default function Layanan() {
  return (
    <div className="w-full h-full bg-red-300 bg-opacity-[0.22] flex justify-center">
      <div className=" flex flex-wrap justify-around gap-4 lg:gap-5 px-10 py-10 lg:py-20 max-w-5xl">
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaUserMd size="5rem" />
            <p className="font-bold">Layanan Umum</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaTooth size="5rem" />
            <p className="font-bold">Layanan Kesehatan Gigi dan Mulut</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <IoWoman size="5rem" />
            <div className="font-bold">
              Layanan Kesehatan Ibu dan Anak (KIA)
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaChild size="5rem" />
            <p className="font-bold">
              Layanan Manajemen Terpadu Balita Sakit (MTBS)
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaAmbulance size="5rem" />
            <p className="font-bold">Layanan Gawat Darurat</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaLungsVirus size="5rem" />
            <p className="font-bold">Layanan Pemeriksaan TB Paru</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <GiMedicines size="5rem" />
            <p className="font-bold">Layanan Kefarmasian</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaFileMedical size="5rem" />
            <p className="font-bold">Layanan Laboratorium</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:bg-red-500 text-red-600 hover:text-white transition-all duration-500 rounded-md text-center w-[300px] px-6 py-8 hover:translate-y-[-0.5rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaUserNurse size="5rem" />
            <p className="font-bold">Layanan Vaksinasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
