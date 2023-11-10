import Banner from "@/components/banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";

export default function Pengembangan() {
  return (
    <>
      <div className="bg-red-100 bg-opacity-60">
        <Banner title="Pelayanan Usaha Kesehatan Masyarakat (UKM) Pengembangan" />

        <div className="w-full flex justify-center py-10">
          <div className=" max-w-6xl flex flex-wrap justify-center gap-6">
            <CustomCard
              src="/lansia.jpg"
              title="Kesehatan Lansia"
              description="Layanan UKM Pengembangan"
              content=""
            />
            <CustomCard
              src="/perkesmas.jpg"
              title="Perkesmas"
              description="Layanan UKM Pengembangan"
              content=""
            />
            <CustomCard
              src="/sekolah_thumb2.jpg"
              title="Kesehatan Sekolah"
              description="Layanan UKM Pengembangan"
              content=""
            />
            <CustomCard
              src="/gigi.jpg"
              title="Kesehatan Gigi Sekolah"
              description="Layanan UKM Pengembangan"
              content=""
            />
            <CustomCard
              src="/indera.jpeg"
              title="Kesehatan Indera"
              description="Layanan UKM Pengembangan"
              content=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
