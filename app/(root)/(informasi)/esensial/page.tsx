"use client";

import Banner from "@/components/banner";
import { ViewModal } from "@/components/modal/view-modal";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";
import { useState } from "react";

export default function Esensial() {
  const [viewOpen, setViewOpen] = useState(false);
  const [foto, setFoto] = useState("");

  function onTap(data: string) {
    setViewOpen(true);
    setFoto(data);
  }

  return (
    <>
      <ViewModal
        title="Photo Viewer"
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
      >
        <Image src={foto} alt="foto" width={500} height={500} />
      </ViewModal>
      <div className="bg-red-100 bg-opacity-60">
        <Banner title="Pelayanan UKM Esensial" />

        <div className="w-full flex justify-center ">
          <div className=" max-w-6xl flex flex-wrap my-10 justify-center gap-6">
            <CustomCard
              src="/promosi.jpeg"
              title="Promosi Kesehatan"
              description="UKM Essensial"
              content=""
              onTap={onTap}
            />

            <CustomCard
              src="/lingkungan.jpg"
              title="Kesehatan Lingkungan"
              description="UKM Essensial"
              content=""
              onTap={onTap}
            />

            <CustomCard
              src="/kia.jpeg"
              title="Kesehatan KIA"
              description="UKM Essensial"
              content=""
              onTap={onTap}
            />

            <CustomCard
              src="/gizi.jpg"
              title="Gizi"
              description="UKM Essensial"
              content=""
              onTap={onTap}
            />

            <CustomCard
              src="/menular.jpg"
              title="Pengendalian dan Pencegahan Penyakit Menular (P2PM)"
              description="UKM Essensial"
              content="TB, HIV, Surveilans dan Imunisasi, Ispa, Diare, DBD,
              Hepatitis, Kusta"
              onTap={onTap}
            />

            <CustomCard
              src="/tidakMenular.jpg"
              title="Pengendalian dan Pencegahan Penyakit Tidak Menular (P2PTM)"
              description="UKM Essensial"
              content="PTM (Penyakit Tidak Menular), Jiwa, Indera"
              onTap={onTap}
            />
          </div>
        </div>
      </div>
    </>
  );
}
