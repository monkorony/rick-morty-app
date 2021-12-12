import React from 'react';
import ReactPaginate from 'react-paginate'

const Pagination = ({setPageNumber, pageNumber}) => {
  let next = () => {
    if (pageNumber === 42) return;
    setPageNumber((currentPageNum) => currentPageNum + 1)
  }

  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((currentPageNum) => currentPageNum - 1)
  }
  return (
    <div className='container d-flex justify-content-center gap-5 my-4'>
      <button disabled={pageNumber === 1 ? true : false} onClick={prev}className='btn btn-primary'>
        Previous
      </button>
      <button  disabled={pageNumber === 42 ? true : false} onClick={next} className='btn btn-primary'>
        Next
      </button>
    </div>
  )
}

export default Pagination
