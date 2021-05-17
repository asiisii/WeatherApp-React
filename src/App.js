import React from 'react'
import apiCalls from './apiData/apiCalls'
import cleanAPIData from './apiData/utilities'
// import Form from './Form'
import Current from './components/Current/Current'
import Forecast from './components/Forecast/Forecast'
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: 'Broomfield',
      currWeather: '',
      forecast: '',
      error: ''
    }
  }

  componentDidMount = () => {
    apiCalls.fetchCurrentData(this.state.city)
      .then(data => {
        this.setState({
        currWeather: cleanAPIData.currData(data)
        })
        this.getForecast(data.coord.lat, data.coord.lon)
      })
      .catch(() => this.setState({error: 'Request failed!!'}))
    
  }

  getForecast = (lat, lon) => {
    apiCalls.fetchForecastData(lat , lon)
      .then(data => this.setState({
        forecast: cleanAPIData.forecastData(data)
      }))
      .catch(() => this.setState({error: 'Request failed!!'}))
  }

  render() {
    return (
      <main>
      {this.state.error && <h2>{this.state.error}</h2>}
      {!this.state.error && !this.state.currWeather 
      && <h2>Loading...</h2>}
      {!this.state.error && !this.state.forecast 
      && <h2>Loading...</h2>}
      {this.state.currWeather && !this.state.error &&
      <section className="today-container">
        < Current weather={this.state.currWeather}/>
      </section>
      
      }
      {this.state.forecast && !this.state.error &&
      <section className="forecast-container">
        < Forecast forecast={this.state.forecast}/>
      </section>  
      }
      </main>
    )
  }
}

export default App