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
      error: ''
    }
  }

  getForecast = (lat, lon) => {
    apiCalls.fetchForecastData(lat , lon)
      .then(data => this.setState({
        forecast: cleanAPIData.forecastData(data)
      }))
      .catch(() => this.setState({error: 'Request failed!!'}))
  }

  getCurrentWeather = search => {
    this.setState({city: search})
    apiCalls.fetchCurrentData(search)
      .then(data => {
        this.setState({
        currWeather: cleanAPIData.currData(data)
        })
        this.getForecast(data.coord.lat, data.coord.lon)
      })
      .catch(() => this.setState({error: 'Request failed!!'}))
      console.log(this.state.city);
  }

  componentDidMount = () => {
    this.getCurrentWeather(this.state.city)
  }

  render() {
    console.log(this.state.city);
    return (
      <main>
        <header>
          <Header getCurrentWeather={this.getCurrentWeather}/>
        </header>
        {/* {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.error && !this.state.currWeather 
        && <h2>Loading...</h2>}
        {!this.state.error && !this.state.forecast 
        && <h2>Loading...</h2>} */}
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