const paginationLogic = (currentPage, residents, maxPageElements) => {
    const sliceStart = (currentPage, maxPageElements) => (currentPage - 1) * maxPageElements;
    const sliceEnd = (currentPage, maxPageElements) => currentPage * maxPageElements;
    const totalPages = Math.ceil(residents.length / maxPageElements);
    const pageElements = residents.slice(
                            sliceStart(currentPage, maxPageElements), 
                            sliceEnd(currentPage, maxPageElements)
                          );
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return {pages, pageElements}
}
export {paginationLogic}