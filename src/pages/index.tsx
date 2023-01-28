import Link from 'next/link'
// import MagnifyingGlass from 'phosphor-react/dist/icons/MagnifyingGlass'
import { useEffect, useRef, useState } from 'react'
import { CountriesCard } from '../components/CountriesCard'
import { Screen } from '../components/Screen'
import { TextInput } from '../components/TextInput'
import { useCountries } from '../contexts/countries'
import {  MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import CountriesApi, { Countries } from '../services/CountriesApi'
import { Loading } from '../components/Loading'

export default function Home() {
  const formRef = useRef<HTMLDivElement>()
  const [countries, setCountries] = useState<Countries[]>();
  const [countriesSearch, setCountriesSearch] = useState(undefined);
  const [searchValue, setSearchValue] = useState();
  const {setCountrie} = useCountries();

  async function getCountryInfo(countrie: string) {
    try {
      const response = await CountriesApi.getCountryInfo(countrie);
      setCountries(response);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    setCountriesSearch(searchValue)
  }
  
  useEffect(() => {
    if (!countriesSearch) {
      getCountryInfo("all")
    }else {
      getCountryInfo(`name/${countriesSearch}`)
    }
  }, [countriesSearch])
  
console.log(countries)  

  if (!countries) return <Loading/>
  return (
    <Screen>
      <div className='mb-14'>
        <form ref={formRef as any} onSubmit={handleSubmit}>
     <TextInput name="search" iconLeft={MagnifyingGlassIcon} placeholder='Search...' onChange={(event: any) => setSearchValue(event?.target.value)}/>
        </form>
      </div>
        <CountriesCard.Group>
      {!!countries.map ? countries.map((c, i) => 
      <Link key={i} href={`/${c.name.common}` || "#"}  onClick={() => setCountrie(c)}>
      <CountriesCard.Root>
          <CountriesCard.Image img={c.flags.svg}/>
          <CountriesCard.Info name={c.name.common} region={c.region} capital={c.capital} population={c.population}/>
        </CountriesCard.Root>
        </Link>
      ) : <h1 className='text-2xl '>Not found</h1>}
      </CountriesCard.Group>
     </Screen>
  )
}
