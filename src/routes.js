import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import files here
import NewPage from './container/NewPage/index';

const Routes = history => {
  return (
    <Router onUpdate={() => { window.scrollTo(0, 0); }} history={history}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={NewPage}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
