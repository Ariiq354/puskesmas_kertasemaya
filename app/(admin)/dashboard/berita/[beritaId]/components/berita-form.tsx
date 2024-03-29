"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2, Trash } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";

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
import { tb_berita } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  nama: z.string().min(1),
  path_image: z.string().min(1),
  penulis: z.string().min(1),
  jenis: z.string(),
  deskripsi: z.string().min(1),
  konten: z.string().min(1),
});

type BeritaFormValue = z.infer<typeof formSchema>;

interface BeritaFormProps {
  initialData: tb_berita | null;
}

export const BeritaForm: React.FC<BeritaFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit News" : "Create News";
  const description = initialData ? "Edit a News." : "Add a new News";
  const toastMessage = initialData ? "News updated." : "News created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<BeritaFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      nama: "",
      path_image: "",
      penulis: "",
      deskripsi: "",
      jenis: "berita",
      konten: "",
    },
  });

  const onSubmit = async (data: BeritaFormValue) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/berita`, {
          ...data,
          id_berita: initialData.id_berita,
        });
      } else {
        await axios.post(`/api/berita`, data);
      }
      router.refresh();
      router.push(`/dashboard/berita`);
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
      await axios.delete(`/api/berita`, {
        data: { id_berita: initialData?.id_berita },
      });
      router.refresh();
      router.push(`/dashboard/berita`);
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
            name="path_image"
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
                  <Input placeholder="Enter news name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deskripsi"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Deskripsi</FormLabel>
                <FormControl>
                  <Input placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="penulis"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Penulis</FormLabel>
                <FormControl>
                  <Input placeholder="Enter penulis" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jenis"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Jenis" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="berita">Berita</SelectItem>
                    <SelectItem value="artikel">Artikel</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="konten"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Konten</FormLabel>
                <FormControl>
                  <Editor
                    value={field.value}
                    onEditorChange={(content) => {
                      field.onChange(content);
                    }}
                    apiKey="my1z8ahpmzkf3awiu3fo8o0f5ii9i4p1nrwsnidxa5c102xk"
                    init={{
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    }}
                  />
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
