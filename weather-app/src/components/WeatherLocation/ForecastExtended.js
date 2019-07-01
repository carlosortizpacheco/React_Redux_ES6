import React, { Component } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import ForecastItem from "../ForecastItem"
import transformForecast from "../../services/transformForecast"
const api_key = "22cf7ee3161ba5d5a86dcede7605a7b0"
const url = "http://api.openweathermap.org/data/2.5/forecast"

// const days=[
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes"
// ]

// const data = {
//   temperature:10,
//   humidity:10,
//   weatherState:"normal",
//   wind:"normal"
// }

class ForecastExtended  extends Component {
  constructor(){
    super()
      this.state= { 
        forecastData:null,
      }
  }

  componentDidMount(){
    this.updateCity(this.props.city)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.city !== this.props.city){
      this.setState({forecastData:null})
      this.updateCity(nextProps.city)
    }
 }
  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`
    fetch (url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        console.log("TEST",weather_data)
        const forecastData = transformForecast(weather_data)
        console.log(forecastData)
        this.setState({forecastData})
      })
  }

  renderForecastItemDays(forecastData){
    return forecastData.map( forecast => 
    <ForecastItem 
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekday}
      hour={forecast.hour}
      data={forecast.data}
    />
    )
  }

  renderProgress=()=>{
    return <h3>Cargando Pronostico extendido</h3> 
  }
  
  render(){
    const {city} = this.props
    const {forecastData} = this.state
    return (
      <div className="forecast-title">
        <h2>Pronostico Extendido para {city}</h2>
        {forecastData ? this.renderForecastItemDays(forecastData):this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city:PropTypes.string.isRequired,
}

export default ForecastExtended