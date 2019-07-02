import React, {Component} from 'react';
import {Grid,Col,Row} from "react-flexbox-grid"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainers from './containers/forecastExtendedContainers';


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

  render(){
    
    return (
      <div className="App">
        <Grid>
          <Row>
            <AppBar title="Weather App">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer
                cities={cities}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
              <div className="details">
                <ForecastExtendedContainers/>
              </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
  
}


export default App
