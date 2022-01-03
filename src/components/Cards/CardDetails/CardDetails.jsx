import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import styles from './CardDetails.module.css';

const CardDetails = () => {
  const { id } = useParams();
  const BASE_URL = `https://rickandmortyapi.com/api/character/${id}`;
  
  const { isError, data, isLoading, setPageNum, } = useFetch(BASE_URL);

  useEffect(() => {
    setPageNum('');
  }, []);

  let displayResult;

  if (data) {
    const { gender, image, name, species, status } = data;
    let badgeStatus = 'info';

    if (status === 'Dead') {
      badgeStatus = 'secondary'
    } else if (status === 'Alive') {
      badgeStatus = 'success'
    } 
    displayResult = (
    <div className={`card ${styles.card__wrap}`} style={{width: '300px', margin: '0 auto'}}>
      <div>
        <img className={`card-img-top ${styles.card__img}`} src={image} alt={name} />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p>Species - {species}</p>
        <p>Gender - {gender}</p>
      </div>
      <div class={`card-footer bg-${badgeStatus} ${styles.status__bg}`}>
        <small>Status - {status}</small>
      </div>
    </div>
    )
  } 
  return (
    <div className='card-details row my-4'>
      <div className='container'>
        <div className='col-md-12'>
          { isError &&  <Error /> }
          { isLoading && <Loader /> }
          { displayResult } 
        </div>
      </div>
           
    </div>
  )
}

export default CardDetails
