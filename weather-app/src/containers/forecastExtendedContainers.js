import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import ForecastExtended from '../components/WeatherLocation/ForecastExtended';


class ForecastExtendedContainers extends Component {
  render() {
    return (
      <ForecastExtended city={this.props.city}/>
    );
  }
}

ForecastExtendedContainers.propTypes = {
  city:PropTypes.string.isRequired,
};

const mapStateToProps = ({city}) => ({city})

export default connect(mapStateToProps,null)(ForecastExtendedContainers)