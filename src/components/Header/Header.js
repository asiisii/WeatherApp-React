import React from 'react'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  submitCity = event => {
    if (event.key === 'Enter') {
      this.props.getCurrentWeather(this.state.search)
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
          value={this.state.search}
          onChange={event => this.handleChange(event)}
          onKeyPress={event => this.submitCity(event)}
        />
        <div>
          <button className="btn">°F</button>
          <button className="btn">°C</button>
        </div>
      </>
    )
  }
}

export default Header