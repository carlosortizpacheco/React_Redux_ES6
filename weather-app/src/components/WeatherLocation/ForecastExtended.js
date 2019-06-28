import React, { Component } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import ForecastItem from "../ForecastItem"


const days=[
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes"
]

const data = {
  temperature:10,
  humidity:10,
  weatherState:"normal",
  wind:"normal"
}

class ForecastExtended  extends Component {

  renderForecastItemDays(){
    return days.map(day=><ForecastItem weekDay={day} hour={10} data={data}/>)
  }

  render(){
    const {city} = this.props
    return (
      <div className="forecast-title">
        <h2>Pronostico Extendido para {city}</h2>
        {this.renderForecastItemDays()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city:PropTypes.string.isRequired,
}

export default ForecastExtended