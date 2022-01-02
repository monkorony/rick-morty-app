import React from 'react';
import useFetch from '../hooks/useFetch';
import Dropdown from '../components/Filters/category/Dropdown';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import LocationInfo from '../components/LocationInfo/LocationInfo';
import CardGridLayout from '../components/Cards/CardGridLayout/CardGridLayout';

const Location = () => {
  const BASE_URL = 'https://rickandmortyapi.com/api/location/';
  const number = 1;
  const { isError, data, results, isLoading, setPageNum} = useFetch(BASE_URL, number);

  return (
    <div>
      <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <div className='text-center m-4'>
            <h2>Location Information</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='text-center mb4'>
            <h4>Pick an Location</h4>
            <Dropdown name="Location" changeID={setPageNum} total={126} />
          </div>
        </div>
        <div className='col-md-8'>
          { isError &&  <Error /> }
          { isLoading && <Loader /> }
          { data && <LocationInfo data={data} /> }
          {data && results && <CardGridLayout data={data} results={results} /> }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Location
