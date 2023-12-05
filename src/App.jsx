import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomNumber } from "./helpers/random.js";
import Location from "./components/Location.jsx";

function App() {
    const [locationInfo, setLocationInfo] = useState(null)
    const [locations, setLocations] = useState()
    const totalLocations = 126
    let arrayLocationsId = []

    for(let i = 1; i <= totalLocations; i++) {
        arrayLocationsId.push(i)
    }
    useEffect(() => {
        const randomDimension = getRandomNumber(totalLocations);
        axios
            .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
            .then(({data}) => setLocationInfo(data))	
            .catch((err) => console.log(err));
    }, []);

    useState(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${arrayLocationsId}`)
            .then(({data}) => {
                    setLocations(data)
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

