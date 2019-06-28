import  React,{Component} from "react"
import Location from "./Location"
import WeatherData from "./WeatherData"
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity"
import "./styles.css"
import transformWeather from "../../services/transforWeather"
import CircularProgress from "@material-ui/core/CircularProgress"
import PropTypes from "prop-types"



class WeatherLocation extends Component {

  constructor (props) {
    super(props)
    const {city} = props

    this.state = {
      city,
      data:null,
    }
  }

  componentDidMount(){
    this.handleUpdateClick()
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)
    fetch(api_weather)
      .then( r => {
        return r.json()
      })
      .then(data=>{
        const newWeather = transformWeather(data)
        console.log(newWeather)
        this.setState({
          data:newWeather
        })
      })
  }

  render() {
    const {city,data} =this.state
    const {onWeatherLocationClick}=this.props
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
      <Location city={city}/>
      {data
        ? 
        <WeatherData data={data}/> 
        :
        <CircularProgress size={50}/> 
      }
    </div>
    )
  }
}

WeatherLocation.propTypes = {
  city:PropTypes.string.isRequired,
  onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation