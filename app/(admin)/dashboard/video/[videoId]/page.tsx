import prismadb from "@/lib/prismadb";
import { VideoForm } from "./components/video-form";

const Dashboard = async ({ params }: { params: { videoId: string } }) => {
  let videoId = 0;

  if (params.videoId !== "new") {
    videoId = parseInt(params.videoId);
  }

  const user = await prismadb.tb_galeri.findUnique({
    where: {
      id_galeri: videoId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <VideoForm initialData={user} />
      </div>
    </div>
  );
};
export default Dashboard;
