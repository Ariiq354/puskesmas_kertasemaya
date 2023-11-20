"use client";

import Image from "next/image";
import React, { useState } from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { tb_galeri } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { usePagination } from "@/hooks/use-pagination";
import Pagination from "@/components/ui/pagination";
import page from "../../profil/page";

interface Props {
  data: tb_galeri[];
}

export default function Client({ data }: Props) {
  const [disable, setDisable] = useState(true);
  const [filtered, setFiltered] = useState(
    data.filter((item) => item.jenis == "foto")
  );

  const handleClick = (jenis: string) => {
    setFiltered(data.filter((item) => item.jenis == jenis));
    setDisable(!disable);
    setCurrentPage(1);
  };

  const {
    currentData,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    paginationRange,
    setCurrentPage,
  } = usePagination<tb_galeri>(filtered, 6, 1);

  return (
    <>
      <div className="w-full flex items-center justify-center p-4 gap-4">
        <Button
          variant={"outline"}
          className="border-red-800 border-2 text-red-800 hover:bg-red-800 text hover:text-white duration-300 font-bold w-20 rounded disabled:bg-red-800 disabled:text-white disabled:opacity-100"
          onClick={() => handleClick("foto")}
          disabled={disable}
        >
          Foto
        </Button>
        <Button
          variant={"outline"}
          className="border-red-800 border-2 text-red-800 hover:bg-red-800 text hover:text-white duration-300 font-bold w-20 rounded disabled:bg-red-800 disabled:text-white disabled:opacity-100"
          onClick={() => handleClick("video")}
          disabled={!disable}
        >
          Video
        </Button>
      </div>
      <div className="container flex flex-wrap gap-12 justify-center my-12">
        {currentData.map((item) =>
          item.jenis == "foto" ? (
            <Image
              key={item.id_galeri}
              src={item.path}
              alt={item.nama}
              width={300}
              height={300}
            />
          ) : (
            <iframe key={item.id_galeri} src={item.path}></iframe>
          )
        )}
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
