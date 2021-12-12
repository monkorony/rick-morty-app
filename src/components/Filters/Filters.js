import React from 'react';
import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status'

const Filters = ({
  setStatus,
  status,
  setPageNumber
}) => {
  return (
    <div className='col-md-4'>
      <div className="text-center fw-bold fs-4 mb-2">
        Filter
      </div>
      <div style={{cursor: 'pointer'}} className='text-center text-primary'>Clear Filters</div>
      <div className="accordion" id="accordionExample">
        <Status 
          setPageNumber={setPageNumber}
          setStatus={setStatus}
          currentStatus={status}
        />
        <Species />
        <Gender />
      </div>
    </div>
  )
}

export default Filters
