import Banner from "@/components/banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Banner title="Galeri" />
      {children}
    </div>
  );
}
