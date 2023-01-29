import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CountriesProvider } from '../contexts/countries'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <CountriesProvider>
    <Component {...pageProps} />
  </CountriesProvider>
}
