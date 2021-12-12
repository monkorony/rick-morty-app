import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Card from '../components/Cards/Card';
import CardGrid from '../components/Cards/CardsGrid';
import axios from 'axios';
import Filters from '../components/Filters/Filters';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';


const CharactersPage = () => {
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
      <Nav />
      <div className="container">
        <div className='row'>
          <div>
            <Search 
              charSearch={charSearch} 
              setCharSearch={setCharSearch}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
        <div className="row">
          
            <Filters 
              
              setStatus={setStatus}
              setPageNumber={setPageNumber}
            />
            {/* <Card characters={fetchedData} /> */}
          
          <div className="col-md-8">
            {isLoading && isError ? 'Error: No characters found' : (
              <div className='card-grid'>
                <CardGrid results={results} isError={isError}/>
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

export default CharactersPage
