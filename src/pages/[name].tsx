import { useRouter } from "next/router";
import { Screen } from "../components/Screen";
import { BackButton } from "../components/BackButton";
import { useCountries } from "../contexts/countries";
import { useEffect } from "react";
import Image from "next/image";

export default function Name() {
    const router = useRouter();
    const {countrie} = useCountries()

    console.log(countrie)

    useEffect(() => {
        if (!countrie.area) {
            router.push("/")
        }
    }, [])

    if (!countrie.area) return <></> 

    return (    
        <Screen>
                <BackButton/>
                <div className="flex flex-1 gap-6 mt-6 flex-col lg:flex-row ">
                <div className="flex lg:flex-1 justify-end items-center">
            <Image src={countrie.flags.svg} className="flex lg:w-[500px] lg:h-[300px]" alt=""></Image>
                </div>
                <div className="flex lg:flex-1 flex-col justify-center items-center lg:items-start gap-4">
                    <h1 className="text-5xl mb-4 text-center">{countrie.name.common || "Not found"}</h1>
                    <h1 className="text-xl">Population: {countrie.population || "Not found"}</h1>
                    <h1 className="text-xl">Capital: {countrie.capital || "Not found"}</h1>
                    <h1 className="text-xl">Region: {countrie.region || "Not found"}</h1>
                    <h1 className="text-xl">Sub region: {countrie.subregion || "Not found"}</h1>
                </div>
                </div>
        </Screen>
    )
}