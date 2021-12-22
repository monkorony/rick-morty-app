import React from 'react';
import Card from './Card';

const CardGridLayout = ({data, results}) => {
  return (
    <>
      <div className='episode-title-container text-center'>
        <h2>{data.name}</h2>
        <h4>Episode: {data.episode}</h4>
        <p>Aired - {data.air_date}</p>
      </div>
      <div className='card-grid'>
        {
          results.map((item) => (<Card 
            key={item.id} 
            page='/episodes/'
            character={item}
            results={results}
          />))
        }
      </div>
    </>
  )
}

export default CardGridLayout
