import prismadb from "@/lib/prismadb";
import { Client } from "./components/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const revalidate = 0;

export default async function Dashboard() {
  const data = await prismadb.tb_user.findMany({
    select: {
      id_user: true,
      role: true,
      username: true,
      email: true,
    },
  });
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Client data={data} />
      </div>
    </div>
  );
}
