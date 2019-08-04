import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        <h3>
          This boilerplate has a built-in Example for redux and redux-saga. I
          dont know if the example follows through and makes sense. I did comment
          on the example. The // comment is the description. The /**/ comment is
          the actual example code. I will be changing code if a more efficent way
          comes out. Let me Know If I should edit anything.
        </h3>
        <h3>Anyways, this code is in src/container/NewPage/index.js</h3>
      </div>
    );
  }
}

NewPage.propTypes = {

};

NewPage.defaultProps = {

};

// used if you are using redux
/*
function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
*/

export default NewPage;
