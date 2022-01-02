import React from 'react';
import useFetch from '../hooks/useFetch';
import Dropdown from '../components/Filters/category/Dropdown'
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import EpisodeInfo from '../components/EpisodeInfo/EpisodeInfo';
import CardGridLayout from '../components/Cards/CardGridLayout/CardGridLayout';

const Episodes = () => {
  const BASE_URL = 'https://rickandmortyapi.com/api/episode/';
  const number = 1;
  const { isError, data, results, isLoading, setPageNum} = useFetch(BASE_URL, number);
  
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <div className='text-center m-4'>
            <h2>Episode Information</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='text-center mb4'>
            <h4>Pick an Episode</h4>
            <Dropdown name="Episode" changeID={setPageNum} total={51} />
          </div>
        </div>
        <div className='col-md-8'>
          { isError &&  <Error /> }
          { isLoading && <Loader /> }
          { data && <EpisodeInfo data={data} /> }
          { results && <CardGridLayout results={results} /> }
        </div>
      </div>
    </div>
  )
}

export default Episodes
