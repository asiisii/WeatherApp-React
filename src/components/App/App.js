import React from 'react'
import apiCalls from '../../apiData/apiCalls'
import cleanAPIData from '../../apiData/utilities'
import Current from '../Current/Current'
import Forecast from '../Forecast/Forecast'
import Header from '../Header/Header'
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: 'Broomfield',
      currWeather: '',
      forecast: '',
      lat: '',
      lon: '',
      error: ''
    }
  }

  getForecast = (lat, lon) => {
    apiCalls.fetchForecastData(lat , lon)
      .then(data => this.setState({
        forecast: cleanAPIData.cleanForecastData(data)
      }))
      .catch(() => this.setState({error: 'Request failed!!'}))
  }

  getCurrentWeather = (cityName, e) => {

    this.setState({city: cityName})
    apiCalls.fetchCurrentData(cityName)
    .then(data => {
      cleanAPIData.assignData(data)
      this.setState({lat: data.coord.lat, lon: data.coord.lon})
      this.getForecast(data.coord.lat, data.coord.lon)
    })
    .then(() => {
      this.setState({
      currWeather: cleanAPIData.cleanCurrData(e)
      })
    })
    .catch(() => this.setState({error: 'Request failed!!'}))
    // console.log('mount');
  }

  degreeConversion = e => {
    cleanAPIData.cleanCurrData(e)
    this.getCurrentWeather(this.state.city, e)
  }

  componentDidMount = () => {
    this.getCurrentWeather(this.state.city)
  }

  render() {
    return (
      <main>
        <header>
          <Header 
          getCurrentWeather={this.getCurrentWeather} 
          currData={this.degreeConversion}
          />
        </header>
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.error && !this.state.currWeather 
        && <h2>Loading...</h2>}
        {!this.state.error && !this.state.forecast 
        && <h2>Loading...</h2>}
        {this.state.currWeather && !this.state.error &&
        <section className="today-container">
          <Current weather={this.state.currWeather} />
        </section>
        
      }
        {this.state.forecast && !this.state.error &&
        <section className="forecast-container">
          <Forecast forecast={this.state.forecast} />
        </section>  
        }
      </main>
    )
  }
}

export default App