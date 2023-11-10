import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }

  const body = await req.json();
  const { nama, jenis, path, konten } = body;

  const video = await prismadb.tb_galeri.create({
    data: {
      nama,
      jenis,
      path,
      konten,
    },
  });

  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }

  const body = await req.json();
  const { id } = body;

  const video = await prismadb.tb_galeri.delete({
    where: {
      id_galeri: id,
    },
  });

  return NextResponse.json(video);
}

export async function PATCH(req: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body = await req.json();
  const { id, nama, jenis, path, konten } = body;

  const video = await prismadb.tb_galeri.update({
    where: {
      id_galeri: id,
    },
    data: {
      nama,
      jenis,
      path,
      konten,
    },
  });

  return NextResponse.json(video);
}
