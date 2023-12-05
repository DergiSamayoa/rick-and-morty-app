import axios from "axios";
import ResidentList from "./ResidentList.jsx";
import AutocompleteInput from "./AutoCompleteInput.jsx";

const Location = ({locationInfo, setLocationInfo, locations}) => {

    const locationNames = locations?.map((location) => location.name)

    const handleSubmit = (event) => {

        event.preventDefault();

        const newLocation = event.target.newLocation.value;
        const newLocationId = locations.find((loc) => loc.name === newLocation).id;
        
        if (Number.isInteger(Number(newLocationId))) {
            axios
                .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
                .then(({data}) => setLocationInfo(data))
                .catch((err) => console.log(err));
        }
    }

    return (
        <section className="bg-no-repeat bg-cover bg-center h-screen flex flex-col items-center
                    bg-[url('/images/rickandmorty-bg-top_loadded.webp')] ">
            <header className="flex flex-col items-center mt-20 max-w-[1200px]">
                <div className="flex flex-col justify-between items-center mb-10 gap-10
                        sm:flex-row sm:gap-40">
                    <div>
                        <img 
                            src="./images/rickandmorty-logo.png" 
                            alt="Rick and Morty logo"
                            className="w-60 "/>
                    </div>
                    <div className="align-middle relative">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <AutocompleteInput options={locationNames} />
                            </div>
                        </form>
                    </div>
                </div>
                <article className="flex flex-col items-center mb-20 border-2 border-red-950/70 rounded-2xl p-4 shadow-xl shadow-yellow-500/40 bg-yellow-200
                        w-5/6">
                    <h2 className="mb-3 font-semibold text-xl text-red-950/70">¡Welcome to {locationInfo?.name}!</h2>
                    <ul className="grid grid-cols-3 gap-2 justify-between text-center  text-red-950/70 w-full">
                        <li className="line-clamp-1">
                            <span className="font-semibold">Type:</span> {locationInfo?.type}
                        </li>
                        <li className="line-clamp-1">
                            <span className="font-semibold">Dimension:</span> {locationInfo?.dimension}
                        </li>
                        <li className="line-clamp-1">
                            <span className="font-semibold">Population:</span> {locationInfo?.residents.length}
                        </li>
                    </ul>                    
                </article>
            </header>
            <article className="bg-gradient-to-t from-black from-[99%] sm:from-90% w-[100%]">
                <ResidentList residents = {locationInfo?.residents ?? []}  />
            </article>
        </section>
    )
}

export default Location