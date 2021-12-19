import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const CardDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const BASE_URL = `https://rickandmortyapi.com/api/character/${id}`;
  //const { isError, data, results, isLoading, setPageNum } = useFetch(BASE_URL);
  
  const fetchData = async () => {
    const { data } = await axios.get(`${BASE_URL}`);
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  //console.log(data, 'data');
  //console.log(results, 'results')
  //console.log(setPageNum(9), 'page number')
  //console.log(`https://rickandmortyapi.com/api/character/${id}`, 'url');
  let displayResult;

  if (data && !isError) {
    const { episode, gender, image, name, species, status } = data;
    displayResult = (
    <div className='card' style={{width: '300px', margin: '0 auto'}}>
      
      <div>
        <img className="card-img-top" src={image} alt={name} />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p>Species - {species}</p>
        <p>Gender - {gender}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Status - {status}</small>
      </div>
    </div>
    )
  } else if (isError) {
    displayResult = 'There was an error. Try again later'
  }
  return (
    <div className='card-details row my-4'>
      <div className='container'>
        <div className='col-md-12'>
          { isLoading ? 'Loading information...' : ''}
          {displayResult} 
        </div>
      </div>
           
    </div>
  )
}

export default CardDetails
