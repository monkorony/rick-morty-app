import React from 'react';
import ReactPaginate from 'react-paginate'

const Pagination = ({setPageNumber, pageNumber, info}) => {
  let pageChange = (data) => {
    setPageNumber((data.selected + 1))
  }

  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((currentPageNum) => currentPageNum - 1)
  }
  return (
    <ReactPaginate className="pagination justify-content-center my-4 gap-4"
    nextLabel="Next"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    previousLabel="Prev"
    previousClassName="btn btn-light"
    nextClassName="btn btn-light"
    pageCount={info?.pages}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    onPageChange={pageChange}
    activeClassName="active"
    />
  )
}

export default Pagination
