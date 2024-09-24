"use client";

import Banner from "@/components/banner";
import { ViewModal } from "@/components/modal/view-modal";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";
import { useState } from "react";

export default function Pengembangan() {
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
        <Banner title="Pelayanan Usaha Kesehatan Masyarakat (UKM) Pengembangan" />

        <div className="w-full flex justify-center py-10">
          <div className=" max-w-6xl flex flex-wrap justify-center gap-6">
            <CustomCard
              src="/lansia.webp"
              title="Kesehatan Lansia"
              description="Layanan UKM Pengembangan"
              content=""
              onTap={onTap}
            />
            <CustomCard
              src="/perkesmas.webp"
              title="Perkesmas"
              description="Layanan UKM Pengembangan"
              content=""
              onTap={onTap}
            />
            <CustomCard
              src="/sekolah_thumb2.webp"
              title="Kesehatan Sekolah"
              description="Layanan UKM Pengembangan"
              content=""
              onTap={onTap}
            />
            <CustomCard
              src="/gigi.webp"
              title="Kesehatan Gigi Sekolah"
              description="Layanan UKM Pengembangan"
              content=""
              onTap={onTap}
            />
            <CustomCard
              src="/indera.webp"
              title="Kesehatan Indera"
              description="Layanan UKM Pengembangan"
              content=""
              onTap={onTap}
            />
          </div>
        </div>
      </div>
    </>
  );
}
