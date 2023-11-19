import React from "react";
import Image from "next/image";
import { FaHome, FaListUl } from "react-icons/fa";
import Banner from "@/components/banner";

export default async function page() {
  return (
    <>
      <Banner title="Profil Puskesmas" />

      <div className="flex justify-center mt-10">
        <Image
          src="/tentang_kami.jpeg"
          width={700}
          height={700}
          alt=""
          className="w-auto h-auto"
        ></Image>
      </div>

      <div className="bg-info py-8 lg:py-10 mb-8 my-16 bg-red-50 rounded">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:flex lg:items-center ">
            <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0 ">
              <p className="text-red-900 text-4xl font-semibold leading-tight">
                Visi
              </p>
              <p className="text-red-800 text-base md:text-md lg:text-xl mt-4">
                &quot;Terwujudnya Indramayu BERMARTABAT (Bersih, Religius, Maju,
                Adil, Makmur dan Hebat)&quot;
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
              <h1 className="text-red-900 text-4xl font-semibold leading-tight">
                Misi
              </h1>
              <p className="font-bold text-left text-red-900 mt-4">
                Sapta Nata Mulia Jaya:
              </p>
              <ul className="text-red-800 text-base md:text-md lg:text-md list-inside table list-decimal">
                <li className="table-row w-fit">
                  <p className="table-cell pr-4">MISI PERTAMA</p>: Perwujudan
                  Reformasi Birokrasi
                </li>
                <li className="table-row">
                  <p className="table-cell pr-4">MISI KEDUA</p>: Fasilitasi
                  Kehidupan Beragama dan Bermasyarakat
                </li>
                <li className="table-row">
                  <p className="table-cell pr-4">MISI KETIGA</p>: Peningkatan
                  Kesejahtraan
                </li>
                <li className="table-row">
                  <p className="table-cell pr-4">MISI KEEMPAT</p>:
                  Penanggulangan Kemiskinan
                </li>
                <li className="table-row">
                  <p className="table-cell pr-4">MISI KELIMA</p>: Peningkatan
                  Daya Saing SDM
                </li>
                <li className="table-row">
                  <p className="table-cell pr-4">MISI KEENAM</p>: Peningkatan
                  Infrastruktur
                </li>
                <li className="table-row">
                  <p className="table-cell pr-4">MISI KETUJUH</p>: Peningkatan
                  Ekonomi dan Daya Saing Daerah
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 py-8  md:grid-cols-2 lg:grid-cols-2 gap-4 px-5 md:px-10 lg:px-20 justify-center">
        <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center items-start p-4 bg-red-800 rounded-t-lg">
            <p className="card-title text-xl font-semibold text-white mb-2">
              <FaHome className="inline-block mr-2 text-xl" />
              MOTTO & TATA NILAI
            </p>
          </div>
          <div className="card-body p-4">
            <p className="card-text text-gray-800">
              <b>KERTAS</b>
              <br /> KERJA KERAS, KERJA CERDAS, KERJA TUNTAS
            </p>
            <ol className="list-decimal pl-6 mt-4">
              <li className="mb-2">
                Kerja Keras: Menjalankan tugas sesuai dengan waktu layanan yang
                ditentukan.
              </li>
              <li className="mb-2">
                Kerja Cerdas: Menjalankan tugas sesuai dengan kompetensinya.
              </li>
              <li className="mb-2">
                Kerja Tuntas: Menjalankan tugas sesuai dengan target yang telah
                ditentukan.
              </li>
            </ol>
          </div>
        </div>

        <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center items-start p-4 bg-red-800 rounded-t-lg">
            <p className="card-title text-xl font-semibold text-white mb-2">
              <FaListUl className="inline-block mr-2 text-xl" />
              TUJUAN
            </p>
          </div>
          <div className="card-body p-4">
            <ol className="list-decimal pl-6 mt-2">
              <li className="mb-2">
                Meningkatkan kualitas SDM Petugas Puskesmas.
              </li>
              <li className="mb-2">
                Memberikan pelayanan Prima kepada seluruh masyarakat tanpa
                membedakan status sosial.
              </li>
              <li className="mb-2">
                Meningkatkan kemandirian masyarakat untuk berprilaku hidup
                bersih dan sehat.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="text-center p-8">
        <div className="flex justify-center">
          <Image
            src="/peta.jpeg"
            alt="data demografis, dll"
            width={1200}
            height={1200}
            className="rounded-lg shadow-md w-auto h-auto"
          />
        </div>
      </div>

      <div className="text-center p-8 py-12 pb-16 text-red-900">
        <div>
          <p className="text-5xl font-semibold mb-8">STRUKTUR ORGANISASI</p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/struktur_organisasi.jpeg"
            alt="struktur organisasi"
            width={800}
            height={1200}
            className="rounded-lg shadow-md w-auto h-auto"
          />
        </div>
      </div>
    </>
  );
}
