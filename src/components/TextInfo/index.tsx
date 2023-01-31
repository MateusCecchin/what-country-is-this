interface Props {
  label: string;
  value: any;
}

export function TextInfo({ label, value }: Props) {
  return (
    <h1 className="flex flex-1 text-lg lg:text-xl self-start whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] fold:max-w-full">
      {label}: {value || "Not found"}
    </h1>
  );
}
