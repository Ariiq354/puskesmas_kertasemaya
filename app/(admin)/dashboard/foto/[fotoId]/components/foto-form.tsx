"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2, Trash } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AlertModal } from "@/components/modal/alert-modal";
import ImageUpload from "@/components/ui/image-upload";
import { tb_galeri } from "@prisma/client";

const formSchema = z.object({
  path: z.string().min(1),
  nama: z.string().min(1),
  konten: z.string().min(1),
});

type FotoFormValue = z.infer<typeof formSchema>;

interface FotoFormProps {
  initialData: tb_galeri | null;
}

export const FotoForm: React.FC<FotoFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Photo" : "Create Photo";
  const description = initialData ? "Edit a Photo." : "Add a new Photo";
  const toastMessage = initialData ? "Photo updated." : "Photo created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<FotoFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      path: "",
      nama: "",
      konten: "",
    },
  });

  const onSubmit = async (data: FotoFormValue) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/galeri`, {
          ...data,
          id_galeri: initialData.id_galeri,
        });
      } else {
        await axios.post(`/api/galeri`, { ...data, jenis: "foto" });
      }
      router.refresh();
      router.push(`/dashboard/foto`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/galeri`, {
        data: { id_galeri: initialData?.id_galeri },
      });
      router.refresh();
      router.push(`/dashboard/foto`);
      toast.success("Photo deleted.");
    } catch (error: any) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="path"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  ></ImageUpload>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter photo name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="konten"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Deskripsi</FormLabel>
                <FormControl>
                  <Input placeholder="Enter photo description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <Button disabled={loading} type="submit">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
