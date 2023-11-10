import Banner from "@/components/banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";

export default function Pelayanan24() {
  return (
    <>
      <div className="bg-red-100 bg-opacity-60">
        <Banner
          title="Pelayanan Upaya Kesehatan Perseorangan (UKP), Layanan Kefarmasian,
            Laboratorium"
        />
        <div className="w-full flex justify-center py-10">
          <div className=" max-w-6xl flex flex-wrap justify-center gap-6">
            <CustomCard
              src="/umum_thumb.jpg"
              title="Layanan Umum"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
            />
            <CustomCard
              src="/gigi_thumb.jpg"
              title="Layanan Gigi"
              description="Layanan Rawat Jalan"
              content="Senin - Kamis"
            />
            <CustomCard
              src="/balita_thumb.jpg"
              title="Layanan Bayi-Balita (MTBS)"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
            />
            <CustomCard
              src="/lansia_thumb.png"
              title="Layanan Usia Lanjut (Lansia)"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
            />
            <CustomCard
              src="/tb_thumb.jpg"
              title="Layanan TB Paru"
              description="Layanan Rawat Jalan"
              content="Senin & Jumat"
            />
            <CustomCard
              src="/kb2.jpg"
              title="Layanan KB"
              description="Layanan Rawat Jalan"
              content="Selasa & Sabtu"
            />
            <CustomCard
              src="/kia2.jpg"
              title="Konseling KIA"
              description="Layanan Konseling Terpadu"
              content="Selasa & Sabtu"
            />

            <CustomCard
              src="/kb_thumb.jpeg"
              title="Konseling KB"
              description="Layanan Konseling Terpadu"
              content="Senin, Rabu, & Jumat"
            />
            <CustomCard
              src="/gizi.png"
              title="Konseling gizi"
              description="Layanan Konseling Terpadu"
              content="Sabtu"
            />

            <CustomCard
              src="/haji_thumb.jpg"
              title="Check-up Calon Haji"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
            />

            <CustomCard
              src="/hiv_thumb.jpg"
              title="Layanan Konseling"
              description="Layanan Konseling Terpadu"
              content="Senin - Sabtu"
            />

            <CustomCard
              src="/lab_thumb.jpg"
              title="Layanan Laboratorium"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
            />

            <CustomCard
              src="/farmasi_thumb.jpg"
              title="Layanan Kefarmasian"
              description="Layanan Rawat Jalan"
              content="Senin - Sabtu"
            />

            <CustomCard
              src="/rujukan.png"
              title="Layanan Rujukan"
              description="Layanan Rawat Jalan"
              content="Setiap Hari"
            />

            <CustomCard
              src="/ambulance_thumb.jpg"
              title="Layanan Ambulance 24 Jam"
              description="Layanan Ambulance"
              content="Setiap Hari"
            />

            <CustomCard
              src="/gawat_thumb.jpg"
              title="Layanan Gawat Darurat dan Persalinan 24 Jam"
              description="Layanan Ambulance"
              content="Setiap Hari"
            />
          </div>
        </div>
      </div>
    </>
  );
}
