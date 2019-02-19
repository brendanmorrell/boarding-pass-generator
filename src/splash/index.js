import { handleActions, createAction } from 'redux-actions';
import mapActions from '../helpers/mapActions';

export const actions = mapActions(['FETCH_AIRPORT', 'AIRPORT_FETCHED'], 'SPLASH');

export const fetchAirport = createAction(actions.FETCH_AIRPORT, airport => airport);
export const airportFetched = createAction(actions.AIRPORT_FETCHED, airport => airport);

const initialState = {};

export default handleActions(
  { [actions.AIRPORT_FETCHED]: (state, { payload: airport }) => ({ ...state, airport }) },
  initialState
);
