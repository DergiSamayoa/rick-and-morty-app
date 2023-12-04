import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomNumber } from "./helpers/random.js";
import Location from "./components/Location.jsx";

function App() {
    const [locationInfo, setLocationInfo] = useState(null)
    useEffect(() => {
        const randomDimension = getRandomNumber(126);
        axios
            .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
            .then(({data}) => setLocationInfo(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <main>
            <Location locationInfo = {locationInfo} setLocationInfo = {setLocationInfo}/>
        </main>
    );
}

export default App;
