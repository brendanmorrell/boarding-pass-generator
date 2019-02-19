import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Geolocate from '../pass/Geolocate';
import { connect } from 'react-redux';
import { fetchAirport } from '.';

const SplashPageContainer = ({ fetchAirportAction }) => {
  const [initialized, initialize] = useState(false);
  useEffect(() => {
    if (!initialized) {
      initialize(true);
      fetchAirportAction();
    }
  });
  return (
    <div>
      <div>Splash Page</div>
    </div>
  );
};

const mstp = state => state;
const mdtp = { fetchAirportAction: fetchAirport };

export default connect(
  mstp,
  mdtp
)(SplashPageContainer);
