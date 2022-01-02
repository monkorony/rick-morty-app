import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="card" key={id}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h4>{name}</h4>
          <p>Species - {species}</p>
          <a className="btn btn-primary" href={url}>
            Details
          </a>
        </div>
        <div className={`card-footer bg-${badgeStatus}`}>
          <small style={{color: 'white'}}>{status}</small>
        </div>
      </div>
    </Link>
    
  )
}

export default Card
