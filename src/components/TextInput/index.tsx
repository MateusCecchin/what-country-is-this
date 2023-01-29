import { HTMLAttributes } from "react";

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  iconLeft?: any;
}

function Root({ children }: any) {
  return (
    <div className="flex flex-1 max-w-[450px] bg-slate-700 py-3 px-4 rounded-lg shadow-2xl gap-2">
      {children}
    </div>
  );
}

function Input({ ...rest }: HTMLAttributes<HTMLInputElement>) {
  return <input className="bg-transparent w-full outline-none" {...rest} />;
}

function TextInputComponent({
  name,
  iconLeft: IconLeft,
  ...rest
}: TextInputProps) {
  return (
    <label htmlFor={name}>
      <TextInput.Root>
        {IconLeft && <IconLeft className="h-6 w-6" />}
        <TextInput.Input id={name} {...rest} />
      </TextInput.Root>
    </label>
  );
}

export const TextInput = Object.assign(TextInputComponent, { Root, Input });
