import Banner from "@/components/banner";
import prismadb from "@/lib/prismadb";
import Client from "./components/client";

export const revalidate = 0;

export default async function Berita() {
  const data = await prismadb.tb_berita.findMany();

  return (
    <>
      <Banner title="Berita Puskesmas" />
      <Client data={data} />
    </>
  );
}
