import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import axios from 'axios';

class QRCodeContainer extends Component {
  componentWillReceiveProps = ({ longitude, latitude }) => {
    console.log(longitude, latitude);
    if (latitude && longitude) {
      axios
        .get(
          `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}`
        )
        .then(res => console.log('RES: ', res));
      // console.log('object');
      // var canvas = document.getElementById('canvas');
      // QRCode.toCanvas(canvas, `Latitude: ${latitude} \n Longitude: ${longitude}`, function(error) {
      //   if (error) console.error(error);
      //   else console.log('success!');
      // });
    }
  };
  componentDidMount() {
    const { latitude, longitude } = this.props;
    console.log(longitude, latitude);
    if (latitude && longitude) {
      axios
        .get(
          `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}`
        )
        .then(res => console.log('RES: ', res));
    }
  }
  render() {
    return <div />;
  }
}

export default QRCodeContainer;
