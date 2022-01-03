import React from 'react';
import Card from '../Card/Card';
import styles from './CardGridLayout.module.css';

const CardGridLayout = ({results}) => {
  return (
    <div className={`${styles.card__grid}`}>
        {
          results.map((item) => (<Card 
            key={item.id} 
            page='/episodes/'
            character={item}
            results={results}
          />))
        }
    </div>
  )
}

export default CardGridLayout
