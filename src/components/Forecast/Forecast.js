import React from 'react'
import '../../index.css'
import '../../responsive.css'

function Forecast(forecastInfo) {
  return forecastInfo.forecast.map((weather, i) => {
    return (
      <figure className="icon-container" key={i} >
        <img className="mini-icon" 
          src= {weather.img}
          alt= {weather.alt} />
        <figcaption className="mini-cap">{weather.max} </figcaption>
        <figcaption className="mini-cap">{weather.day}</figcaption>
      </figure>
    )
  })
  
  
}

export default Forecast