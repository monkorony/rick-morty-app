import React, { useEffect, useState } from 'react';
import CardGrid from '../components/Cards/CardsGrid';
import CardGridLayout from '../components/Cards/CardGridLayout';
import axios from 'axios';
import Filters from '../components/Filters/Filters';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';


const Characters = () => {
  const [fetchedData, updateFetchedData] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [charSearch, setCharSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${charSearch}&status=${status}&species=${species}&gender=${gender}`;
  

  let { info, results } = fetchedData;
  //console.log(results, 'results')
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get(url);
        //console.log(res, 'data');
        updateFetchedData(res.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e)
        setError(true)
      }
      
    };

    fetchCharacters();
  }, [url]);
  return (
    <div>
      <div className="container">
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-center m-4'>
              <h2>Characters</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col-md-4'>
            <Search 
              charSearch={charSearch} 
              setCharSearch={setCharSearch}
              setPageNumber={setPageNumber}
            />
            <Filters 
              setSpecies={setSpecies}
              setStatus={setStatus}
              setGender={setGender}
              setPageNumber={setPageNumber}
            />
          </div>
          
          {/* <Card characters={fetchedData} /> */}
          
          <div className="col-md-8">
            { isError &&  <Error /> }
            { isLoading && <Loader /> }
            { results && (
              <div className='card-grid'>
                <CardGrid page='/' results={results} isError={isError}/>
              </div>
            )}
            <Pagination 
              setPageNumber={setPageNumber} 
              pageNumber={pageNumber}
              info={info}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters
