import React from 'react';
import Card from './Card';

const CardsGrid = ({results, isError}) => {
  //console.log(results, 'results grid')
  let displayGrid;

  if (results && !isError) {
    displayGrid = results.map((item) => (<Card key={item.id} character={item}/>))
  } else {
    displayGrid = 'No characters found'
  }
  return (
    <>
      {displayGrid}
    </>
  )
}

export default CardsGrid
