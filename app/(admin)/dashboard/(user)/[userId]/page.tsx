import prismadb from "@/lib/prismadb";
import { UserForm } from "./components/user-form";

export const revalidate = 0;

const Dashboard = async ({ params }: { params: { userId: string } }) => {
  let userId = 0;

  if (params.userId !== "new") {
    userId = parseInt(params.userId);
  }

  const user = await prismadb.tb_user.findUnique({
    where: {
      id_user: userId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UserForm initialData={user} />
      </div>
    </div>
  );
};
export default Dashboard;
