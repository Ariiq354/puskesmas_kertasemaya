import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { tb_berita } from "@prisma/client";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body: tb_berita = await req.json();
  const { nama, path_image, penulis, deskripsi, konten } = body;

  const video = await prismadb.tb_berita.create({
    data: {
      nama,
      path_image,
      penulis,
      deskripsi,
      konten,
    },
  });

  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body = await req.json();
  const { id_berita } = body;

  const video = await prismadb.tb_berita.delete({
    where: {
      id_berita,
    },
  });

  return NextResponse.json(video);
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body: tb_berita = await req.json();
  const { id_berita, nama, path_image, penulis, deskripsi, konten } = body;

  const video = await prismadb.tb_berita.update({
    where: {
      id_berita,
    },
    data: {
      nama,
      path_image,
      penulis,
      deskripsi,
      konten,
    },
  });

  return NextResponse.json(video);
}
