import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export function BackButton() {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center self-start gap-2 py-2 px-3 rounded shadow-2xl bg-slate-700 hover:bg-slate-600 hover:cursor-pointer"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <h1 className="text-xl">Back</h1>
    </div>
  );
}
