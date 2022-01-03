import React from 'react';
import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';
import styles from './Filters.module.css';

const Filters = ({
  setStatus,
  setSpecies,
  setGender,
  setPageNumber
}) => {

  const clearFilter = () => {
    setSpecies('');
    setGender('');
    setStatus('');
    setPageNumber(1);
    window.location.reload(false)
  }
  return (
    <>
      <div className={`${styles.filter__text_layout}`}>
        <div className="text-center fw-bold fs-4 mb-2">
          Filter 
        </div>
        <div 
        onClick={clearFilter}
        style={{cursor: 'pointer', textDecoration: 'underline'}} 
        className={` ${styles.filter__link} text-center mb-2`}>
          Clear Filters
        </div>
      </div>
      
      <div className="accordion" id="accordionExample">
        <Status 
          setPageNumber={setPageNumber}
          setStatus={setStatus}
        />
        <Species 
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        />
        <Gender 
          setGender={setGender}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  )
}

export default Filters
