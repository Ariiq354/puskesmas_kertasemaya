import prismadb from "@/lib/prismadb";
import Client from "./components/client";

export const revalidate = 0;

export default async function Galeri() {
  const data = await prismadb.tb_galeri.findMany();

  return (
    <>
      <Client data={data} />
    </>
  );
}
