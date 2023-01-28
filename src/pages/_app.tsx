import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CountriesProvider } from '../contexts/countries'

export default function App({ Component, pageProps }: AppProps) {
  return <CountriesProvider><Component {...pageProps} /></CountriesProvider>
}
