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

export default function Esensial() {
  return (
    <>
      <div className="bg-red-100 bg-opacity-60">
        <Banner title="Pelayanan UKM Esensial" />

        <div className="w-full flex justify-center ">
          <div className=" max-w-6xl flex flex-wrap my-10 justify-center gap-6">
            <CustomCard
              src="/promosi.jpeg"
              title="Promosi Kesehatan"
              description="UKM Essensial"
              content=""
            />

            <CustomCard
              src="/lingkungan.jpg"
              title="Kesehatan Lingkungan"
              description="UKM Essensial"
              content=""
            />

            <CustomCard
              src="/kia.jpeg"
              title="Kesehatan KIA"
              description="UKM Essensial"
              content=""
            />

            <CustomCard
              src="/gizi.jpg"
              title="Gizi"
              description="UKM Essensial"
              content=""
            />

            <CustomCard
              src="/menular.jpg"
              title="Pengendalian dan Pencegahan Penyakit Menular (P2PM)"
              description="UKM Essensial"
              content="TB, HIV, Surveilans dan Imunisasi, Ispa, Diare, DBD,
              Hepatitis, Kusta"
            />

            <CustomCard
              src="/tidakMenular.jpg"
              title="Pengendalian dan Pencegahan Penyakit Tidak Menular (P2PTM)"
              description="UKM Essensial"
              content="PTM (Penyakit Tidak Menular), Jiwa, Indera"
            />
          </div>
        </div>
      </div>
    </>
  );
}
