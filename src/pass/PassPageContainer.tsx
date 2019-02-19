import React from 'react';
import PropTypes from 'prop-types';
import QRCoder from './Geolocate';
import { connect } from 'react-redux';

const PassPageContainer = ({ latitude, longitude }) => {
  return (
    <>
      <div>Pass Page</div>
      <QRCoder latitude={latitude} longitude={longitude} />
    </>
  );
};

const mstp = (state: any) => ({
  latitude:
    state.splash &&
    state.splash.airport &&
    state.splash.airport.geoCode &&
    state.splash.airport.geoCode.latitude,
  longitude:
    state.splash &&
    state.splash.airport &&
    state.splash.airport.geoCode &&
    state.splash.airport.geoCode.longitude,
});

const mdtp = {};

export default connect(
  mstp,
  mdtp
)(PassPageContainer);
