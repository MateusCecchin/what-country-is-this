export interface Countries {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: ILatLng;
  car: ICar;
  coatOfArms: ICoatOfArms;
  continents: string[];
  currencies: ICurrencies;
  flag: string;
  flags: IFlags;
  indepedent: boolean;
  landlocked: boolean;
  latlng: number[];
  maps: IMaps;
  name: IName;
  population: number;
  postalCode: IPostalCode;
  region: string;
  startOfWeek: string;
  subregion: string;
  timezones: string[];
  tld: string[];
}

interface IPostalCode {
  format: string;
  regex: string;
}

interface IName {
  common: string;
  official: string;
}

interface IMaps {
  googleMaps: string;
  openStreetMaps: string;
}

interface IFlags {
  png: string;
  svg: string;
}

interface ICurrencies {
  GBP: IGBP;
}

interface IGBP {
  name: string;
  symbol: string;
}

interface ICoatOfArms {
  png: string;
  svg: string;
}

interface ICar {
  side: string;
  signs: string[];
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
}

interface ILatLng {
  latlng: number[];
}

async function fetchCountryInfo(country: string) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/${country}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default { fetchCountryInfo };
