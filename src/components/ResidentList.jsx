import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { paginationLogic } from "../utils/pagination"

const ResidentList = ({residents}) => {
    const maxElementsPage = 20

    const [currentPage, setPage] = useState(1)

    const {pages, pageElements} = paginationLogic(currentPage, residents, maxElementsPage)
    
    const handleChangePage = (page) => {
        setPage(parseInt(page))
        // event.target.textContent  es lo mismo que el valo de page que llega como argumento
    }

    useEffect(() => {
        setPage(1)
    }, [residents])

    return (
        <div >
            <section className="mx-auto max-w-[1200px]">
                <section className="grid gap-6 grid-cols-[repeat(auto-fill,250px)] justify-center">
                    {
                        pageElements.map((resident, index) => (
                            <ResidentCard key={index} endpointResident={resident} />
                        ))
                    }
                </section>
            </section>
            <section className="bg-no-repeat bg-bottom h-screen w-[100%] bg-cover
                        bg-[url('/images/rickandmorty-bg-bottom_loadded.webp')]">
                <ul className="flex justify-center gap-2 flex-wrap p-4 w-[100%] 
                        bg-gradient-to-b from-black to-100% h-screen pt-40">
                    {
                        pages.map((page) => (
                            <li key={page} >
                                <button 
                                    onClick={() => handleChangePage(page)}
                                    className={`"font-bold text-xl border-4 h-12 aspect-square rounded-full 
                                            hover:border-yellow-200 hover:bg-red-950/70 hover:text-yellow-200 " 
                                            ${currentPage === page 
                                                ? "border-yellow-200 bg-red-950/70 text-yellow-200"
                                                : "border-red-950/70 bg-yellow-200 text-red-950/70"}`}
                                >
                                    {page}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}
export default ResidentList