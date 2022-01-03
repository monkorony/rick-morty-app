import React from 'react';
import Card from './Card/Card';

const CardsGrid = ({results, page}) => {
  //console.log(results, 'results grid')
  let displayGrid;

  // if (results) {
  //   displayGrid = 
  // }
  return (
    <>
      {results.map((item) => (<Card 
        key={item.id} 
        page={page} 
        character={item}
      />))}
    </>
  )
}

export default CardsGrid
