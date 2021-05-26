import React from 'react'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  submitCity = event => {
    if (event.key === 'Enter') {
      this.props.getCurrentWeather(this.state.query)
    }
  }

  render() {
    return (
      <>
        <input
          className='search'
          type='text'
          placeholder='Search by city'
          name='search'
          max='15'
          autoComplete='off'
          value={this.state.query}
          onChange={event => this.handleChange(event)}
          onKeyPress={event => this.submitCity(event)}
        />
        <div>
          <button 
          className="btn imperial"
          onClick={(e) => this.props.currData(e)}
          >°F</button>
          <button 
          className="btn metric"
          onClick={(e) => this.props.currData(e)}
          >°C</button>
        </div>
      </>
    )
  }
}

export default Header