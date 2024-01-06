"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import { tb_testimoni } from "@prisma/client";
import { METHODS } from "http";
import { useEffect, useState } from "react";

export default function Testimoni() {
  const [data, setData] = useState<tb_testimoni[] | null>(null);

  useEffect(() => {
    fetch("/api/testimoni", {
      method: "GET",
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center py-20">
      <Carousel className="w-full max-w-6xl">
      <CarouselContent>
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.map((item) => (
              <CarouselItem className="basis-1/3" key={item.id_testimoni}>
                <Card className="border-0">
                  <CardContent className="flex items-center justify-center flex-col gap-4 p-4">
                    <div className="text-justify opacity-60">
                      “{item.message}”
                    </div>
                    <div>
                      <Avatar className="w-20 h-20 border-4 border-red-700">
                        <AvatarImage src={item.path_image} />
                      </Avatar>
                    </div>
                    <div className="text-xl">{item.nama}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
          ))
          )}
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
