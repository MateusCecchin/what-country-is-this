import React, { createContext, useContext, useState } from "react";
import { Countries } from "../services/CountriesApi";

interface CountriesData {
  countrie: Countries;
  setCountrie: (countrie: Countries) => void;
}

interface CountriesProviderProps {
  children: React.ReactNode;
}

const CountriesContext = createContext({} as CountriesData);

export function CountriesProvider({ children }: CountriesProviderProps) {
  const [countrie, setCountrie] = useState<Countries>({} as Countries);

  return (
    <CountriesContext.Provider value={{ countrie, setCountrie }}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountries() {
  return useContext(CountriesContext);
}
