"use client";

import Banner from "@/components/banner";
import { ViewModal } from "@/components/modal/view-modal";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";
import { useState } from "react";

export default function Pelayanan24() {
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
        <Banner
          title="Pelayanan Upaya Kesehatan Perseorangan (UKP), Layanan Kefarmasian,
            Laboratorium"
        />
        <div className="w-full flex justify-center py-10">
          <div className=" max-w-6xl flex flex-wrap justify-center gap-6">
            <CustomCard
              src="/umum_thumb.webp"
              title="Layanan Umum"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
              onTap={onTap}
            />
            <CustomCard
              src="/gigi_thumb.webp"
              title="Layanan Gigi"
              description="Layanan Rawat Jalan"
              content="Senin - Kamis"
              onTap={onTap}
            />
            <CustomCard
              src="/balita_thumb.webp"
              title="Layanan Bayi-Balita (MTBS)"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
              onTap={onTap}
            />
            <CustomCard
              src="/lansia_thumb.webp"
              title="Layanan Usia Lanjut (Lansia)"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
              onTap={onTap}
            />
            <CustomCard
              src="/tb_thumb.webp"
              title="Layanan TB Paru"
              description="Layanan Rawat Jalan"
              content="Senin & Jumat"
              onTap={onTap}
            />
            <CustomCard
              src="/kb2.webp"
              title="Layanan KB"
              description="Layanan Rawat Jalan"
              content="Selasa & Sabtu"
              onTap={onTap}
            />
            <CustomCard
              src="/kia2.webp"
              title="Konseling KIA"
              description="Layanan Konseling Terpadu"
              content="Selasa & Sabtu"
              onTap={onTap}
            />

            <CustomCard
              src="/kb_thumb.webp"
              title="Konseling KB"
              description="Layanan Konseling Terpadu"
              content="Senin, Rabu, & Jumat"
              onTap={onTap}
            />
            <CustomCard
              src="/gizi.webp"
              title="Konseling gizi"
              description="Layanan Konseling Terpadu"
              content="Sabtu"
              onTap={onTap}
            />

            <CustomCard
              src="/haji_thumb.webp"
              title="Check-up Calon Haji"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
              onTap={onTap}
            />

            <CustomCard
              src="/hiv_thumb.webp"
              title="Layanan Konseling"
              description="Layanan Konseling Terpadu"
              content="Senin - Sabtu"
              onTap={onTap}
            />

            <CustomCard
              src="/lab_thumb.webp"
              title="Layanan Laboratorium"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
              onTap={onTap}
            />

            <CustomCard
              src="/farmasi_thumb.webp"
              title="Layanan Kefarmasian"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
              onTap={onTap}
            />

            <CustomCard
              src="/rujukan.webp"
              title="Layanan Rujukan"
              description="Layanan Rawat Jalan"
              content="Setiap Hari"
              onTap={onTap}
            />

            <CustomCard
              src="/ambulance_thumb.webp"
              title="Layanan Ambulance 24 Jam"
              description="Layanan Ambulance"
              content="Setiap Hari"
              onTap={onTap}
            />

            <CustomCard
              src="/gawat_thumb.webp"
              title="Layanan Gawat Darurat dan Persalinan 24 Jam"
              description="Layanan Ambulance"
              content="Setiap Hari"
              onTap={onTap}
            />
          </div>
        </div>
      </div>
    </>
  );
}
