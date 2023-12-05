import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomNumber } from "./helpers/random.js";
import Location from "./components/Location.jsx";

function App() {
    const [locationInfo, setLocationInfo] = useState(null)
    const [locations, setLocations] = useState()
    // let arrayLocations = []
    useEffect(() => {
        const randomDimension = getRandomNumber(126);
        axios
            .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
            .then(({data}) => setLocationInfo(data))	
            .catch((err) => console.log(err));
    }, []);

    useState(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]")
            .then(({data}) => {
                    setLocations(data)
                    // setLocations(data.map((location) => location.name))
                    console.log(locations)
                })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main>
            <Location 
                locationInfo = {locationInfo} 
                setLocationInfo = {setLocationInfo} 
                locations = {locations} 
            />
        </main>
    );
}

export default App;

