import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

const Card = ({character, page}) => {
  const { id, status, url, name, species, image } = character;
  let badgeStatus = 'info';

  if (status === 'Dead') {
    badgeStatus = 'secondary'
  } else if (status === 'Alive') {
    badgeStatus = 'success'
  } 
  return (
    <Link style={{textDecoration : 'none', color: 'unset'}} to={`${page}${id}`}>
      <div className={`card ${styles.card__wrap}`} key={id}>
        <img src={image} className={`card-img-top ${styles.card__img}`} alt={name} />
        <div className="card-body">
          <h4>{name}</h4>
          <p>Species - {species}</p>
        </div>
        <div className={`card-footer bg-${badgeStatus} ${styles.status__bg}`}>
          <small style={{color: 'white'}}>Status - {status}</small>
        </div>
      </div>
    </Link>
    
  )
}

export default Card
