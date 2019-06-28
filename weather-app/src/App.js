import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import LocationList from './components/LocationList';
import {Grid,Col,Row} from "react-flexbox-grid"
import ForecastExtended from "./components/WeatherLocation/ForecastExtended"

import "./App.css"

const cities=[
  "Buenos Aires,ar",
  "Washington,us",
  "Bogota,col",
  "Ciudad de México,mx",
  "Madrid,es",
  "Lima,pe"
]

class App extends Component {

  constructor () {
    super()
    this.state = {city:null}
  }

  handleSelectedLocation = city => {
    this.setState({city})
    console.log(`handleSelectionLocation ${city}`)
  }

  render(){
    const {city} = this.state
    return (
      <div className="App">
        <Grid>
          <Row>
            <AppBar>
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
              <div className="details">
                { city && <ForecastExtended city={city}/>  }
              </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
  
}

export default App;
