import React from 'react'

const EpisodeInfo = ({ data }) => {
  return (
    <div className='episode-title-container text-center'>
      <h2>{data.name}</h2>
      <h4>Episode: {data.episode}</h4>
      <p>Aired - {data.air_date}</p>
    </div>
  )
}

export default EpisodeInfo
