import React from 'react'

const LocationInfo = ({ data }) => {
  return (
    <div className='text-center'>
      <h2>{data.name}</h2>
      <h4>Type - {data.type}</h4>
      <p>Dimension - {data.dimension}</p>
    </div>
  )
}

export default LocationInfo
