import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Kontak() {
  return (
    <div className="container  rounded-lg p-12 gap-12 my-24 grid lg:grid-cols-2 grid-cols-1">
      <div className="flex flex-col w-full rounded-lg shadow-lg">
        <div className="flex p-3 bg-red-500 rounded-t-lg justify-center">
          <h5 className="text-2xl font-semibold text-white">Kontak</h5>
        </div>
        <div className="p-6 bg-red-100 rounded-b-lg w-full h-full grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
            <div>Whatsapp</div>
            <Link href="https://wa.me/6282118894770">
              <Image src="/whatsapp.webp" width={50} height={50} alt=""></Image>
            </Link>
            <div>0821-1889-4770</div>
          </div>
          <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
            <div>Email</div>
            <Link
              className="h-[50px] flex items-center"
              href="mailto:puskes.kertasemaya@gmail.com"
            >
              <Image src="/email.webp" width={50} height={50} alt=""></Image>
            </Link>
            <div>puskes.kertasemaya@gmail.com</div>
          </div>
          <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
            <div>Instagram</div>
            <Link
              target="_blank"
              href="https://www.instagram.com/puskesmas_kertasemaya/"
            >
              <Image
                src="/instagram.webp"
                width={50}
                height={50}
                alt=""
              ></Image>
            </Link>
            <div>puskesmas_kertasemaya</div>
          </div>
          <div className="bg-white flex flex-col font-bold gap-6 justify-center items-center rounded-md shadow-md">
            <div>Facebook</div>
            <Link
              target="_blank"
              href="https://www.facebook.com/puskesmas.kertasemaya.7"
            >
              <Image src="/facebook.webp" width={50} height={50} alt=""></Image>
            </Link>
            <div>Puskesmas Kertasemaya</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full rounded-lg shadow-lg">
        <div className="flex p-3 bg-red-500 rounded-t-lg justify-center">
          <h5 className="text-2xl font-semibold text-white">LOKASI</h5>
        </div>
        <div className="p-6 bg-red-100 rounded-b-lg w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8571906123275!2d108.34954167490773!3d-6.539712193453122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ec3724e2c674d%3A0xe7e272e1d2c60818!2sPuskesmas%20Kertasemaya!5e0!3m2!1sen!2sid!4v1699513524598!5m2!1sen!2sid"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
