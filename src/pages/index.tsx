import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Screen } from "../components/Screen";
import { TextInput } from "../components/TextInput";
import { useCountries } from "../contexts/countries";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CountriesApi, { Countries } from "../services/CountriesApi";
import { Loading } from "../components/Loading";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [countries, setCountries] = useState<Countries[]>();
  const [countriesSearch, setCountriesSearch] = useState(undefined);
  const { setCountrie } = useCountries();

  async function fetchCountryInfo(countrie: string) {
    try {
      const response = await CountriesApi.fetchCountryInfo(countrie);
      if (response.status == "404") {
        toast("Countrie not found", { autoClose: 5000, type: "error" });
      }else {
        setCountries(response);
      }
    } catch (error) {
      toast(error, { autoClose: 5000, type: "error" });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value
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
      <ToastContainer theme="dark" />
      <form onSubmit={handleSubmit} className="mb-14">
        <TextInput
          name="search"
          iconLeft={MagnifyingGlassIcon}
          placeholder="Made by: Mateus Cecchin"
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
      {countries.map && countries.map((c, i) => (
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
