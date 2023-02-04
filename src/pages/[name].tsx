import { useRouter } from "next/router";
import { Screen } from "../components/Screen";
import { BackButton } from "../components/BackButton";
import { useCountries } from "../contexts/countries";
import { useEffect } from "react";
import Image from "next/image";
import { TextInfo } from "../components/TextInfo";

export default function Name() {
  const router = useRouter();
  const { countrie } = useCountries();

  useEffect(() => {
    if (!countrie.area) {
      router.push("/");
    }
  }, [countrie.area, router]);

  if (!countrie.area) return <></>;
  return (
    <Screen>
      <BackButton />
      <div className="flex flex-1 gap-6 mt-6 flex-col lg:flex-row ">
        <div className="flex lg:flex-1 lg:justify-end items-center self-start lg:self-center">
          <Image
            priority
            src={countrie.flags.svg}
            width={500}
            height={300}
            alt="Imagem do pais"
          />
        </div>
        <div className="flex lg:flex-1 flex-col justify-center self-start lg:self-center gap-4">
          <h1 className="text-2xl lg:text-5xl mb-4">{countrie.name.common}</h1>
          <TextInfo label="Population" value={countrie.population} />
          <TextInfo label="Capital" value={countrie.capital} />
          <TextInfo label="Region" value={countrie.region} />
          <TextInfo label="Sub region" value={countrie.subregion} />
        </div>
      </div>
    </Screen>
  );
}
