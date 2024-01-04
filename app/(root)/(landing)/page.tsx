import Carousel from "./components/carousel";
import TentangKami from "./components/tentangKami";
import JadwalLayanan from "./components/jadwalLayanan";
import Layanan from "./components/layanan";
import Ikm from "./components/ikm";
import Title from "./components/title";
import Testimoni from "./components/testimoni";
import Berita from "./components/berita";

export default function Home() {
  return (
    <>
      <Carousel />
      <TentangKami />
      <Title title="Jadwal Layanan" />
      <JadwalLayanan />
      <Title title="Layanan Puskesmas" />
      <Layanan />
      <Title title="Index Kepuasan" />
      <Ikm />
      <Title title="Testimoni" />
      <Testimoni />
      <Title title="Berita & Artikel" />
      <Berita />
    </>
  );
}
