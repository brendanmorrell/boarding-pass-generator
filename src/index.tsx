import React from 'react';
import ReactDOM from 'react-dom';
import { register } from './serviceWorker';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { storeFactory, history } from './store';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';

const store = storeFactory({});
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading="Loading">
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
register();
