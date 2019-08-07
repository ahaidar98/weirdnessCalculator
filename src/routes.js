import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import files here
import WeirdnessCalculator from './container/WeirdnessCalculator/index';
import ResultsPage from './container/ResultsPage/index';

const Routes = history => {
  return (
    <Router onUpdate={() => { window.scrollTo(0, 0); }} history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={WeirdnessCalculator}
        />
        <Route
          exact
          path="/results"
          component={ResultsPage}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
