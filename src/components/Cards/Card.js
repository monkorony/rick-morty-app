import React from 'react'

const Card = ({character}) => {
  const { id, status, url, name, species, image } = character;
  let badgeStatus = 'info';

  if (status.toLowerCase() === 'dead') {
    badgeStatus = 'secondary'
  } else if (status.toLowerCase() === 'alive') {
    badgeStatus = 'success'
  } 
  return (
    <div className="card" key={id}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <div>
          <span className={`badge bg-${badgeStatus}`}>{status}</span>
        </div>
        <h2>{name}</h2>
        <p>{species}</p>
        <a className="btn btn-primary" href={url}>
          Info
        </a>
      </div>
    </div>
  )
}

export default Card
