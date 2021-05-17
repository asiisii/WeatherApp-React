import React from 'react'
import '../../index.css'
import '../../responsive.css'
function Current(currentInfo) {
  const {date, loc, img, description, 
    detail, maxTemp, minTemp, temp, feels} = currentInfo.weather
  return (
    <>
      <article className="info">
      <p className="date">{date}</p>
      <p className="location">{loc}</p>
      <p className="high-low">High {maxTemp}° / Low {minTemp}°</p>
      <p className="temp">{temp}</p>
      <p className="feels-like">Feels like {feels}°</p>
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