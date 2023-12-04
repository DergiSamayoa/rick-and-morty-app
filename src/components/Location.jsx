import axios from "axios";

import ResidentList from "./ResidentList.jsx";

const Location = ({locationInfo, setLocationInfo}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const newLocationId = event.target.newLocation.value;
        console.log(newLocationId);
        axios
            .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
            .then(({data}) => setLocationInfo(data))
            .catch((err) => console.log(err));
    }
  return (
    <section className="bg-no-repeat bg-cover bg-center h-screen flex flex-col items-center
                bg-[url('./images/rickandmorty-bg-top_loadded.png')] ">
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
                    <form onSubmit={handleSubmit} className="">
                        <div className="">
                            <input type="number" min="1" max="126" name="newLocation" placeholder="Type a location ID..." 
                                    className="w-80 p-1 pl-4 border-2 border-red-950/70 rounded-2xl " />
                            <button type="submit"
                                    className="w-28 p-1 border-2 border-red-950/70 rounded-2xl text-center absolute right-0 ">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <article className="flex flex-col items-center m-8 border-2 border-red-950/70 rounded-2xl p-4 shadow-xl shadow-yellow-500/40 bg-yellow-200
                    w-3/4">
                <h2 className="mb-3 font-semibold text-xl">¡Welcome to {locationInfo?.name}!</h2>
                <ul className="grid grid-cols-3 gap-4">
                    <li>
                        <span className="font-semibold">Type:</span> {locationInfo?.type}
                    </li>
                    <li>
                        <span className="font-semibold">Dimension:</span> {locationInfo?.dimension}
                    </li>
                    <li>
                        <span className="font-semibold">Population:</span> {locationInfo?.residents.length}
                    </li>
                </ul>                    
            </article>
        </header>
        <article className="bg-gradient-to-t from-black from-[99%] sm:from-90% w-screen">
            <ResidentList residents = {locationInfo?.residents ?? []}  />
        </article>
    </section>
  )
}
export default Location