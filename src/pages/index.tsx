import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Screen } from "../components/Screen";
import { TextInput } from "../components/TextInput";
import { useCountries } from "../contexts/countries";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CountriesApi, { Countries } from "../services/CountriesApi";
import { Loading } from "../components/Loading";

export default function Home() {
  const [countries, setCountries] = useState<Countries[]>();
  const [countriesSearch, setCountriesSearch] = useState(undefined);
  const [searchValue, setSearchValue] = useState();
  const { setCountrie } = useCountries();

  async function fetchCountryInfo(countrie: string) {
    try {
      const response = await CountriesApi.fetchCountryInfo(countrie);
      setCountries(response);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setCountriesSearch(searchValue);
  }

  useEffect(() => {
    if (countriesSearch) {
      fetchCountryInfo(`name/${countriesSearch}`);
    } else {
      fetchCountryInfo("all");
    }
  }, [countriesSearch]);

  return (
    <Screen>
      <form onSubmit={handleSubmit} className="mb-14">
        <TextInput
          name="search"
          iconLeft={MagnifyingGlassIcon}
          placeholder="Made by: Mateus Cecchin"
          onChange={(event: any) => setSearchValue(event?.target.value)}
        />
      </form>
      {countries ? (
        <CountrieCards countries={countries} onCountrie={setCountrie} />
      ) : (
        <Loading />
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
      {countries.map((c, i) => (
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
