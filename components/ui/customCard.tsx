import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  src: string;
  title: string;
  description: string;
  content: string;
}

export default function CustomCard({
  content,
  description,
  src,
  title,
}: Props) {
  return (
    <Card className="w-80">
      <CardHeader className="flex flex-col gap-4">
        <Image
          src={src}
          alt=""
          width={300}
          height={300}
          className="w-full rounded-md"
        ></Image>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-red-600 text-center">{title}</CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-center font-bold">{content}</CardContent>
    </Card>
  );
}
