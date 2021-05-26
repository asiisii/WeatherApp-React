import React from 'react'
import '../../index.css'
import '../../responsive.css'

function Current(weatherData) {
  const {date, loc, img, description, 
    detail, temp, feels, maxTemp, minTemp, deg} = weatherData.weather
  return (
    <>
      <article className="info">
      <p className="date">{date}</p>
      <p className="location">{loc}</p>
      <p className="high-low">High {maxTemp}{deg} / Low {minTemp}{deg}</p>
      <p className="temp">{temp}</p>
      <p className="feels-like">Feels like {feels}{deg}</p>
      </article>
      <figure className="icon-container">
        <img className="icon"
        src={img}
        alt={description}/>
        <figcaption className="today-caption">{detail}</figcaption>
      </figure>
    </>
    )

}

export default Current