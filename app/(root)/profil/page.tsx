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

      <div className="bg-info py-8 lg:py-10 mb-8 my-16 bg-red-100 rounded">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:flex lg:items-center ">
            <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0 ">
              <h1 className="text-red-600 text-4xl font-semibold leading-tight">
                Visi
              </h1>
              <p className="text-red-500 text-base md:text-md lg:text-xl mt-4">
                &quot;Terwujudnya Indramayu BERMARTABAT (Bersih, Religius, Maju,
                Adil, Makmur dan Hebat)&quot;
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
              <h1 className="text-red-600 text-4xl font-semibold leading-tight">
                Misi
              </h1>
              <table className="text-red-500 text-base md:text-md lg:text-md mt-4 list-decimal list-inside">
                <tbody>
                  <tr>
                    <td colSpan={3} className="font-bold">
                      Sapta Nata Mulia Jaya:
                    </td>
                  </tr>
                  <tr className="mb-4">
                    <td className="w-[30%]">1. MISI PERTAMA</td>
                    <td>:</td>
                    <td>&nbsp;Perwujudan Reformasi Birokrasi</td>
                  </tr>
                  <tr className="mb-4">
                    <td className="">2. MISI KEDUA</td>
                    <td>:</td>
                    <td>
                      &nbsp;Fasilitasi Kehidupan Beragama dan Bermasyarakat
                    </td>
                  </tr>
                  <tr className="mb-4">
                    <td className="">3. MISI KETIGA</td>
                    <td>:</td>
                    <td>&nbsp;Peningkatan Kesejahtraan</td>
                  </tr>
                  <tr className="mb-4">
                    <td>4. MISI KEEMPAT</td>
                    <td>:</td>
                    <td>&nbsp;Penanggulangan Kemiskinan</td>
                  </tr>
                  <tr className="mb-4">
                    <td>5. MISI KELIMA</td>
                    <td>:</td>
                    <td>&nbsp;Peningkatan Daya Saing SDM</td>
                  </tr>
                  <tr className="mb-4">
                    <td>6. MISI KEENAM</td>
                    <td>:</td>
                    <td>&nbsp;Peningkatan Infrastruktur</td>
                  </tr>
                  <tr className="mb-4">
                    <td>7. MISI KETUJUH</td>
                    <td>:</td>
                    <td>&nbsp;Peningkatan Ekonomi dan Daya Saing Daerah</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 py-8  md:grid-cols-2 lg:grid-cols-2 gap-4 px-5 md:px-10 lg:px-20 justify-center">
        <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center items-start p-4 bg-red-400 rounded-t-lg">
            <h5 className="card-title text-xl font-semibold text-white mb-2">
              <FaHome className="inline-block mr-2 text-xl" />
              MOTTO & TATA NILAI
            </h5>
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
          <div className="flex justify-center items-start p-4 bg-red-400 rounded-t-lg">
            <h5 className="card-title text-xl font-semibold text-white mb-2">
              <FaListUl className="inline-block mr-2 text-xl" />
              TUJUAN
            </h5>
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
          <h2 className="text-5xl font-semibold mb-8">STRUKTUR ORGANISASI</h2>
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
