import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import files here
import NewPage from './container/NewPage/index';
import ResultsPage from './container/ResultsPage/index';

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
          <Route
            exact
            path="/results"
            component={ResultsPage}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
