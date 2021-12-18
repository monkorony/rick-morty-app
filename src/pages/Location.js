import React from 'react';
import useFetch from '../hooks/useFetch';
import CardsGrid from '../components/Cards/CardsGrid';
import Dropdown from '../components/Filters/category/Dropdown'

const Location = () => {
  const BASE_URL = 'https://rickandmortyapi.com/api/location/';
  const { isError, data, results, setPageNum} = useFetch(BASE_URL);

  return (
    <div>
      <div className="container">
        <div className='row'>
          <div className='col-md-4'>
            <div className='text-center mb4'>
              <h4>Pick an Location</h4>
              <Dropdown name="Location" changeID={setPageNum} total={126} />
            </div>
          </div>
          <div className='col-md-8'>
          {!data ? 'Error: None found' : (
            <>
              <div className='episode-title-container text-center'>
                <h2>{data.name}</h2>
                <h4>Type: {data.type}</h4>
                <p>Dimension - {data.dimension}</p>
              </div>
              <div className='card-grid'>
                <CardsGrid page='/location/' results={results} isError={isError}/>
              </div>
            </>
          )}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Location
