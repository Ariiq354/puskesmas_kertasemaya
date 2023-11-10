"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email(),
  number: z.string().min(10).max(20),
  message: z.string().min(5),
});

type kritikType = z.infer<typeof formSchema>;

export default function Kritik() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<kritikType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const onSubmit = async (data: kritikType, e: any) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("test1");

    emailjs
      .send("service_y5h1ja3", "template_5brviu6", data, "Zc7_12fsMNiVT6Agi")
      .then(() => toast.success("pesan terkirim"))
      .catch(() => toast.error("Error"))
      .finally(() => {
        setIsLoading(false), console.log("test2");
      });
  };

  return (
    <div className="container bg-red-100 rounded-lg p-12 flex items-center flex-col mb-24 shadow-lg">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700 items-center justify-center">
          Kritik & Saran
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="pl-2" style={{ fontSize: "18px" }}>
                    Nama
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pl-2" style={{ fontSize: "18px" }}>
                      E-mail
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="contoh@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pl-2" style={{ fontSize: "18px" }}>
                      No. Telp
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="No. Telepon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="pl-2" style={{ fontSize: "20px" }}>
                    Ulasan dan Masukan
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white text-sm"
                      placeholder="Tulis Komplain atau Saran anda"
                      style={{ fontSize: "17px" }}
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p
              className="text-sm text-muted-foreground text-justify font-light py-1 px-3"
              style={{ fontSize: "16px" }}
            >
              Tanggapan Anda akan kami gunakan untuk meningkatkan layanan kami
              di masa mendatang, Terima kasih.
            </p>
            <Button
              disabled={isLoading}
              className="bg-red-700 hover:bg-red-600 w-full"
              type="submit"
              style={{ fontSize: "18px" }}
            >
              Kirim Pesan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
