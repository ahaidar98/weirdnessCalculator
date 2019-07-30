import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

//import files here


const Routes = history => {
  return (
    <Router onUpdate={() => { window.scrollTo(0, 0); }} history={history}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <div>Go to 'routes.js' to change routes render method.</div>}
          />
        </Switch>
      </div>
    </Router>
  );
};

Routes.propTypes = {

};

// start with empty strings for form inputs
Routes.defaultProps = {

};

export default Routes;
