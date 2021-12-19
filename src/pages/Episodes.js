import React from 'react';
import useFetch from '../hooks/useFetch';
import CardsGrid from '../components/Cards/CardsGrid';
import Dropdown from '../components/Filters/category/Dropdown'

const Episodes = () => {
  const BASE_URL = 'https://rickandmortyapi.com/api/episode/';
  const { isError, data, results, setPageNum} = useFetch(BASE_URL);
  
  return (
    <div className="container">
        <div className='row'>
          <div className='col-md-4'>
            <div className='text-center mb4'>
              <h4>Pick an Episode</h4>
              <Dropdown name="Episode" changeID={setPageNum} total={51} />
            </div>
          </div>
          <div className='col-md-8'>
          {!data ? 'Error: None found' : (
            <>
              <div className='episode-title-container text-center'>
                <h2>{data.name}</h2>
                <h4>Episode: {data.episode}</h4>
                <p>Aired - {data.air_date}</p>
              </div>
              <div className='card-grid'>
                <CardsGrid page='/episodes/' results={results} isError={isError}/>
              </div>
            </>
          )}
          </div>
        </div>
    </div>
  )
}

export default Episodes
