import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pagination.css'

function Pagination({ totalData, dataPerPage, setCurrentPage, currentPage, lastPage }) {

    let pages = []

    //Calculating total number of pages as per data
    const totalPages = Math.ceil(totalData / dataPerPage)

    //Pushing pages number in array
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }


    return (
        <div className='pagination'>
            <button
                className={currentPage === 1 ? 'prev-nex-button-inactive' : 'prev-nex-button-active'}
                disabled={currentPage === 1 ? true : false}
                onClick={() => setCurrentPage((prev) => prev === 1 ? prev : prev - 1)}
            >
                <ArrowBackIosIcon />
            </button>


            {pages.map((page, index) => (
                <button
                    key={index}
                    className={page === currentPage ? 'page-active' : 'page-inactive'}
                    onClick={() => setCurrentPage(page)}>


                    {page}
                </button>


            ))}


            <button
                className={currentPage === totalPages ? 'prev-nex-button-inactive' : 'prev-nex-button-active'}
                disabled={currentPage === (totalPages) ? true : false}
                onClick={() => setCurrentPage((next) => next === (totalPages) ? next : next + 1)}
            >
                <ArrowForwardIosIcon />
            </button>
        </div>
    )
}

export default Pagination
