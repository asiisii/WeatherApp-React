const api = {
  myKey: `45833beddeb8dc3bec2ec8d182bda4d0`,
  currentData: `https://api.openweathermap.org/data/2.5/weather?q=`,
  forecastData: `https://api.openweathermap.org/data/2.5/onecall?lat=`
}

const apiCalls = {
  async fetchCurrentData(query) {
    const response = await fetch(`${api.currentData}${query}&units=imperial&appid=${api.myKey}`)
    return await response.json()
      
  },

  async fetchForecastData(lat, lon) {
    const response = await fetch(`${api.forecastData}${lat}&lon=${lon}&units=imperial&appid=${api.myKey}`)
    return await response.json()
  }
}

export default apiCalls