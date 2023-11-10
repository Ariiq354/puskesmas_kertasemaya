import Banner from "@/components/banner";
import Kontak from "./components/kontak";
import Feedback from "./components/feedback";

import React from "react";
import Kritik from "./components/kritik";

export default function HubungiKami() {
  return (
    <>
      <Banner title="Hubungi Kami" />
      <Kontak />
      <Kritik />
      <Feedback />
    </>
  );
}
