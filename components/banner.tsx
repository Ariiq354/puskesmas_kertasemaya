interface Props {
  title: string;
}

export default function Banner({ title }: Props) {
  return (
    <div className="w-full h-[40vh] image bg-cover px-24">
      <h1 className="md:text-6xl text-4xl font-bold h-full flex md:justify-start justify-center items-center text-center text-red-900">
        {title}
      </h1>
    </div>
  );
}
