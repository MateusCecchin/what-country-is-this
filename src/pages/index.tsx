import { useState } from "react";
import { Card } from "../components/Card";
import { Screen } from "../components/Screen";
import { TextInput } from "../components/TextInput";
import { useCountries } from "../contexts/countries";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CountriesApi, { Countries } from "../services/CountriesApi";
import { Loading } from "../components/Loading";
import { ToastContainer } from "react-toastify";
import { useQuery } from "react-query";

export default function Home() {
  const [countriesSearch, setCountriesSearch] = useState(undefined);
  const { setCountrie } = useCountries();

  const countries = countriesSearch ? `name/${countriesSearch}` : "all";

  const { data } = useQuery<Countries[]>(
    ["Countries", countries],
    async () => await CountriesApi.fetchCountryInfo(countries)
  );

  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setCountriesSearch(searchValue);
  }

  


  return (
    <Screen>
      <ToastContainer theme="dark" />
      <form onSubmit={handleSubmit} className="mb-14">
        <TextInput
          name="search"
          iconLeft={MagnifyingGlassIcon}
          placeholder="Made by: Mateus Cecchin"
        />
      </form>
      {data ? (
        <CountrieCards countries={data} onCountrie={setCountrie} />
      ) : (
        <Loading/>
      )}
    </Screen>
  );
}

interface CountrieCardsProps {
  countries: Countries[];
  onCountrie: (countrie: Countries) => void;
}

function CountrieCards({ countries, onCountrie }: CountrieCardsProps) {
  return (
    <Card.Group>
      {countries.map &&
        countries.map((c, i) => (
          <Card.Root
            key={i}
            href={`/${c.name.common}` || "#"}
            onClick={() => onCountrie(c)}
          >
            <Card.Image img={c.flags.svg} />
            <Card.Info
              name={c.name.common}
              region={c.region}
              capital={c.capital}
              population={c.population}
            />
          </Card.Root>
        ))}
    </Card.Group>
  );
}
