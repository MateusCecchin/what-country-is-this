import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CountriesProvider } from "../contexts/countries";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesProvider>
        <ToastContainer theme="dark" />
        <Component {...pageProps} />
      </CountriesProvider>
    </QueryClientProvider>
  );
}
