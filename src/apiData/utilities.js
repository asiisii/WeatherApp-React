let day;
const cleanAPIData = {
  currData: (currWeather) => {
    const location = `${currWeather.name}, ${currWeather.sys.country}`
    let icon = currWeather.weather[0].icon
    let detail = currWeather.weather[0].description
    return {
      date: cleanAPIData.formatDate(),
      loc: location,
      img: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      description: currWeather.weather[0].main,
      detail: detail.charAt(0).toUpperCase() + detail.slice(1),
      maxTemp: parseInt(currWeather.main.temp_max),
      minTemp: parseInt(currWeather.main.temp_min),
      temp: parseInt(currWeather.main.temp),
      feels: parseInt(currWeather.main.feels_like),
    }
  },

  forecastData: (forecast) => {
    const dailyForecast = forecast.daily
    dailyForecast.shift()
    dailyForecast.pop()
    return dailyForecast.map(forecast => {
      const icon = forecast.weather[0].icon
      return {
        img: `http://openweathermap.org/img/wn/${icon}@2x.png`,
        alt: forecast.weather[0].main,
        max: parseInt(forecast.temp.max),
        day: day
      }
    })

  },

  formatDate: () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]
    const current = new Date()
    const date = current.getDate()
    day = days[current.getDay()]
    const month = months[current.getMonth()]
    const time = current.toLocaleTimeString([], 
      { hour: '2-digit', minute: "2-digit" })
    return `${day} ${month} ${date}, ${time}`
  },

  convertTemp: () => {
  
  },
}

export default cleanAPIData