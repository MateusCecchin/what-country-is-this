interface Props {
  label: string;
  value: any;
}

export function TextInfo({ label, value }: Props) {
  return (
    <h1 className="text-lg lg:text-xl self-start">
      {label}: {value || "Not found"}
    </h1>
  );
}
