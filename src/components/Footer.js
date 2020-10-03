import React, { useState } from 'react'


const Footer = ({ loadNextPage, loadPrevPage, pagesLength }) => {
    const [pageNumber, setPageNumber] = useState(0)

    const handleNextButton = () => {
        loadNextPage(pageNumber + 1)
        setPageNumber(pageNumber + 1)

    }

    const handlePrevButton = () => {
        loadPrevPage(pageNumber - 1)
        setPageNumber(pageNumber - 1)
    }

    return (
        <div className="footer">
            {pageNumber <= 0 ? <div></div> : <button onClick={handlePrevButton}>Back</button>}
            <p>{pageNumber + 1}</p>
            {pageNumber >= pagesLength - 1 ? <div></div> : <button onClick={handleNextButton}>Next</button>}
        </div>
    )
}

export default Footer
