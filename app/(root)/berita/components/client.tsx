"use client";

import Image from "next/image";
import Link from "next/link";

import { tb_berita } from "@prisma/client";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";
import { usePagination } from "@/hooks/use-pagination";
import { useState } from "react";
import Pagination from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  data: tb_berita[];
}

interface SearchProps {
  nama: string;
  penulis: string;
  deskripsi: string;
  konten: string;
}

const keys = ["nama", "penulis", "deskripsi", "konten"];

export default function Client({ data }: Props) {
  const [querySeach, setQuerySearch] = useState("");
  const [jenis, setJenis] = useState("berita");

  const handleChange = useDebouncedCallback((query: string) => {
    setQuerySearch(query);
    setCurrentPage(1);
  }, 300);

  const handleJenis = (jenisQuery: string) => {
    setJenis(jenisQuery);
  };

  const filteredData = data
    .filter((item) =>
      keys.some((key) =>
        item[key as keyof SearchProps]
          .toLowerCase()
          .includes(querySeach.toLowerCase())
      )
    )
    .filter((item) => item.jenis === jenis);

  const {
    currentData,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    paginationRange,
    setCurrentPage,
  } = usePagination<tb_berita>(filteredData, 4, 1);

  return (
    <>
      <div className="container p-4 flex gap-4">
        <Select onValueChange={handleJenis} defaultValue={"berita"}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="berita">Berita</SelectItem>
            <SelectItem value="artikel">Artikel</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Search berita..."
          onChange={(e) => handleChange(e.target.value)}
          defaultValue={querySeach}
        />
      </div>
      <div className="container md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-10">
        {currentData.map((item) => (
          <div
            key={item.id_berita}
            className="bg-white shadow-md rounded overflow-hidden max-w-sm mx-auto border-t-4 border-t-red-500 my-5 sm:my-0 flex flex-col justify-between"
          >
            <div>
              <Image
                src={item.path_image}
                alt="Image"
                className="w-full h-[35vh] bg-cover image"
                width={500}
                height={500}
                layout=""
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-red-600 cutoffNama">
                  {item.nama}
                </h2>
                <div className="cutoff">{item.deskripsi}</div>
              </div>
            </div>
            <div className="p-4 bg-white flex justify-center">
              <Link href={`/berita/${item.id_berita}`}>
                <button className="bg-white border-2 text-gray-600 px-4 py-2 rounded hover:border-red-400 hover:bg-red-400 hover:text-white duration-150">
                  Selengkapnya
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mb-4">
        <Pagination
          className=""
          currentPage={currentPage}
          handleCurrentPage={setCurrentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          pageRange={paginationRange!}
        />
      </div>
    </>
  );
}
