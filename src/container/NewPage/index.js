import React from 'react'
import PropTypes from 'prop-types';

import './styles.css';

class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="textContainer">
        <h2>Hooray! You've downloaded my react boiler plate</h2>
        <h3>Anyways, this code is in src/container/NewPage/index.js</h3>
      </div>
    );
  }
}

NewPage.propTypes = {

};

NewPage.defaultProps = {

};

export default NewPage;
