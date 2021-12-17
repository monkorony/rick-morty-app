import React from 'react'

const Card = ({character}) => {
  const { id, status, url, name, species, image } = character;
  let badgeStatus = 'info';

  if (status === 'Dead') {
    badgeStatus = 'secondary'
  } else if (status === 'Alive') {
    badgeStatus = 'success'
  } 
  return (
    <div className="card" key={id}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <div>
          <span className={`badge bg-${badgeStatus}`}>{status}</span>
        </div>
        <h4>{name}</h4>
        <p>{species}</p>
        <a className="btn btn-primary" href={url}>
          Info
        </a>
      </div>
    </div>
  )
}

export default Card
