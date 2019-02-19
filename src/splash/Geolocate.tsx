import React, { Component } from 'react';
import axios from 'axios';
import Amadeus from 'amadeus';

class App extends Component {
  state = { latitude: null, longitude: null };
  componentDidMount = () => {
    const success = ({ coords: { latitude, longitude, accuracy } }) => {
      var amadeus = new Amadeus({
        clientId: 'SZWBHthze0TOzJA4qNoLbG3d76QcaT4T',
        clientSecret: 'zM8C6IHGtCGCp23D',
      });
      amadeus.referenceData.locations.airports
        .get({
          longitude,
          latitude,
        })
        .then(function(response) {
          console.log(response.data[0].iataCode);
        })
        .catch(function(error) {
          console.log(error.code);
        });
      // }
      // this.setState({ latitude, longitude });
      // axios
      //   .post(
      //     'https://test.api.amadeus.com/v1/security/oauth2/token',
      //     {
      //       grant_type: 'client_credentials',
      //       client_id: 'SZWBHthze0TOzJA4qNoLbG3d76QcaT4T',
      //       client_secret: 'zM8C6IHGtCGCp23D',
      //     },
      //     // { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      //   )
      //   .then(res => {
      //     axios
      //       .get(
      //         `https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}`,
      //         { headers: { Bearer: res.accessToken } }
      //       )
      //       .then(res => {
      //         console.log('here we go');
      //       });
      //   });
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };
    navigator.geolocation.getCurrentPosition(success, error);
  };
  render() {
    return null;
  }
}

export default App;
