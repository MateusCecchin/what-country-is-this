import { Header } from "../Header";

export function Screen({ children }: any) {
  return (
    <div className="flex flex-1 flex-col bg-slate-800 min-h-screen text-white">
      <Header />
      <div className="flex flex-col flex-1 py-14 px-20">{children}</div>
    </div>
  );
}
