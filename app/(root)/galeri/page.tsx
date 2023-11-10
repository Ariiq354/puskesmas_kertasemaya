import prismadb from "@/lib/prismadb";
import Client from "./components/client";
import Banner from "@/components/banner";

export const revalidate = 0;

export default async function Galeri() {
  const data = await prismadb.tb_galeri.findMany();

  return (
    <>
      <Banner title="Galeri" />
      <Client data={data} />
    </>
  );
}
