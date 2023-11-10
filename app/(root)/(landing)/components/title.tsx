interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div className="flex justify-center p-8 bg-red-200">
      <h1 className="md:text-6xl text-center font-bold text-5xl text-red-600">
        {title}
      </h1>
    </div>
  );
}
