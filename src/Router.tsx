import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router';

import FormPageContainer from './form/FormPageContainer';
import SplashPageContainer from './splash/SplashPageContainer';
import PassPageContainer from './pass/PassPageContainer';

const Router = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/splash" />} />
      <Route path="/splash" component={SplashPageContainer} />
      <Route path="/form" component={FormPageContainer} />
      <Route path="/pass" component={PassPageContainer} />
    </Switch>
  </Fragment>
);

export default Router;
