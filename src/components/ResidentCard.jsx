import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({endpointResident}) => {
    const [residentInfo, setResidentInfo] = useState(null)  

    useEffect(() => {
        axios
            .get(endpointResident)
            .then(({data}) => setResidentInfo(data))
            .catch((err) => console.log(err));
    }, [endpointResident]);   	

    const bgColorByStatus = {
        Alive: "bg-green-600",
        Dead: "bg-red-600",
        unknown: "bg-gray-600",
    };

    return (
        <article className="w-[260px] flex flex-col items-center relative mb-48">
            <header className="relative z-40">
                <img src={residentInfo?.image} alt="" className="aspect-square w-[150px] border-4 border-red-950/90 rounded-full" />
                <div className="flex items-center gap-2 bg-black/50 rounded-xl p-1 px-2
                                absolute bottom-6 left-1/2 -translate-x-1/2 text-white">
                    <div className = {`h-4 aspect-square rounded-full ${bgColorByStatus[residentInfo?.status]}`}></div>
                    <span>{residentInfo?.status}</span>
                </div>
            </header>
            <section className="border-8 border-red-950/70 rounded-2xl w-[100%] h-[200px] absolute top-[120px] bg-[#856888] z-30">
                <div className="bg-[#C9BEDC] h-[95%] rounded-br-full rounded-bl-lg top-10px relative mt-2">
                    <h5 className="line-clamp-1 text-xl text-center text-red-950/70 pt-6 pb-2 mb-3 font-semibold bg-[#EDE288] rounded-lg absolute -top-[8px] w-full">
                        {residentInfo?.name}
                    </h5>
                    <ul className="text-xs text-red-950/70 pl-4 pt-14">
                        <li className=" grid grid-cols-2 justify-center m-4">
                            <span className="uppercase">Species:</span>
                            <span className="line-clamp-1 text-white">
                                {residentInfo?.species}
                            </span> 
                        </li>
                        <li className="line-clamp-1 grid grid-cols-2 m-4">
                            <span className="uppercase ">
                                Origin:
                            </span> 
                            <span className="line-clamp-1 text-white">
                                {residentInfo?.origin.name}
                            </span>
                        </li>
                        <li className="line-clamp-1 grid grid-cols-2 m-4">
                            <span className="uppercase ">Times appear:</span> 
                            <span className="line-clamp-1 text-white">
                                {residentInfo?.episode.length}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </article>
    )
}
export default ResidentCard