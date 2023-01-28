interface InfoProps {
    name: string;
    population: number;
    region: string;
    capital: string[]
}

function Root({children}: any) {
    return (
        <div className="sm:min-w-[300px] sm:min-h-[400px] max-w-[300px] max-h-[400px] bg-slate-700 rounded-lg shadow-2xl hover:bg-slate-600 hover:cursor-pointer">
            {children}
        </div>
    )
}

function Image({img}: any){
    return (
        <div className="flex flex-1 max-h-[150px] max-w-[300px]">
            <img src={img} />
        </div>
    )
}

function Info({name, population, region, capital}: InfoProps){

    return <div className="p-8">
        <h1 className="text-2xl mb-6 font-semibold">{name}</h1>
        <div className="flex flex-col gap-3">
        <h1 className="text-lg flex">Population: {population}</h1>
        <h1 className="text-lg flex">Region: {region}</h1>
        <h1 className="text-lg flex">Capital: {capital ?? "Not found"}</h1>
        </div>
</div>
}

function Group ({children}: any) {
    return (
<div className='flex flex-col flex-1 md:grid md:grid-cols-2 xl:grid-cols-4 gap-24'>
    {children}
</div>
    )
}

export const CountriesCard = {Root, Image, Info,Group } 