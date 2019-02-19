import { all, takeLatest, call, put } from 'redux-saga/effects';
import { actions as SPLASH, airportFetched } from '.';
import Amadeus from 'amadeus';
import { history } from '../store';

const getLocation = () => {
  const geolocation = navigator.geolocation;
  return new Promise((resolve, reject) => {
    if (!geolocation) reject(new Error('Not Supported'));
    geolocation.getCurrentPosition(
      position => resolve(position),
      () => reject(new Error('Permission denied'))
    );
  });
};

const getAirport = location => {
  const {
    coords: { latitude, longitude },
  } = location;
  return new Promise((resolve, reject) => {
    var amadeus = new Amadeus({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    });
    amadeus.referenceData.locations.airports
      .get({
        longitude,
        latitude,
      })
      .then(({ data }) => resolve(data[0]))
      .catch(reject);
  });
};

export function* fetchAirportSaga() {
  try {
    const location = yield call(getLocation);
    const airport = yield call(getAirport, location);
    yield put(airportFetched(airport));
    history.push('/pass');
  } catch (error) {
    yield error;
  }
}

export default function*() {
  yield all([takeLatest(SPLASH.FETCH_AIRPORT, fetchAirportSaga)]);
}
