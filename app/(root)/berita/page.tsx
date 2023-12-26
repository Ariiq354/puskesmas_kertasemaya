import prismadb from "@/lib/prismadb";
import Client from "./components/client";

export const revalidate = 0;

export default async function Berita() {
  const data = await prismadb.tb_berita.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  return (
    <>
      <Client data={data} />
    </>
  );
}
