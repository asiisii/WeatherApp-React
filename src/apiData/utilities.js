const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]
let maximumTemp, minimumTemp, currWeatherData, today, deg, max

const cleanAPIData = {

  assignData: currWeather => {
    currWeatherData = currWeather
    const current = new Date()
    const date = current.getDate()
    const day = days[current.getDay()]
    const month = months[current.getMonth()]
    const time = current.toLocaleTimeString([], 
      { hour: '2-digit', minute: "2-digit" })
    today = `${day} ${month} ${date}, ${time}`
  },

  cleanCurrData: (e) => {
    cleanAPIData.convertCurrDegree(e)
    const location = `${currWeatherData.name}, ${currWeatherData.sys.country}`
    let icon = currWeatherData.weather[0].icon
    let detail = currWeatherData.weather[0].description
    // console.log(maximumTemp, minimumTemp);
    return {
      date: today,
      loc: location,
      img: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      description: currWeatherData.weather[0].main,
      detail: detail.charAt(0).toUpperCase() + detail.slice(1),
      maxTemp: maximumTemp,
      minTemp: minimumTemp,
      temp: parseInt(currWeatherData.main.temp),
      feels: parseInt(currWeatherData.main.feels_like),
      deg: deg
    }
  },


  cleanForecastData: (forecast) => {
    const dailyForecast = forecast.daily
    dailyForecast.shift()
    dailyForecast.pop()
    return dailyForecast.map(forecast => {
      const icon = forecast.weather[0].icon
      deg === '°F' ? max = forecast.temp.max : max = (forecast.temp.max - 32) * 5/9
      const day = days[new Date(forecast.dt * 1000).getDay()]
      return {
        img: `http://openweathermap.org/img/wn/${icon}@2x.png`,
        alt: forecast.weather[0].main,
        max: parseInt(max),
        day: day,
        deg: deg
      }
    })

  },

  convertCurrDegree: (e) => {
    let degreeType
    if(e) {
      degreeType = e.target.className.split(' ')[1]
    }
    if (degreeType === 'metric') {
      // console.log('metric');
      maximumTemp = parseInt((currWeatherData.main.temp_max - 32) * 5/9)
      minimumTemp = parseInt((currWeatherData.main.temp_min - 32) * 5/9)
      deg = `°C`;
    } 
    else {
      // console.log('else');
      maximumTemp = parseInt(currWeatherData.main.temp_max)
      minimumTemp = parseInt(currWeatherData.main.temp_min)
      deg = `°F`;
    }

  },
}

export default cleanAPIData