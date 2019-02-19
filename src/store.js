import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';

import splashSaga from './splash/saga';
import splashReducer from './splash';

export const history = createHistory();

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth', 'permissions', 'locations', 'registration'],
};

export const storeFactory = initialState => {
  const router = routerMiddleware(history);
  const logger = createLogger();
  const saga = createSagaMiddleware();

  const appReducer = combineReducers({
    form: formReducer,
    router: connectRouter(history),
    splash: splashReducer,
  });

  const pReducer = persistReducer(persistConfig, appReducer);

  const store = createStore(
    pReducer,
    initialState,
    composeWithDevTools(applyMiddleware(router, logger, saga))
  );

  saga.run(splashSaga);

  return store;
};
