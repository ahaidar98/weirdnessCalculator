import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './styles.css';
import { getGifData } from './actions';

class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getGifData();
  }

  render() {
    return(
      <div>
        <div className="pgHeader"><h3>Weirdness Calculator</h3></div>
        <div className="calcContainer">
          <div className="calcDescrip">
            <p>
              Find out how weird you are by selecting the GIFs that make you laugh.
              We'll show you the least weird ones to start, but you can move the slider
              to make them weirder.
            </p>
            <p>
              When you find a GIF you like, press the <i>Like</i> button. Once you
              like 5 GIFs, we'll show you how weird you are.
            </p>
            <br />
            <div>
              <input placeholder="Search GIFs" />
              <button>Search</button>
            </div>
          </div>
          <div className="calcResults"><h5>YOUR RESULTS</h5></div>
        </div>
        <div className="likedGifContainer"><h5>YOUR LIKED GIFS</h5></div>
      </div>
    );
  }
}

NewPage.propTypes = {
  getGifData: PropTypes.func.isRequired,
  gifStatus: PropTypes.string.isRequired,
  gifErrorMessage: PropTypes.array,
};

NewPage.defaultProps = {
  gifErrorMessage: [],
};


function mapStateToProps(state) {
  return {
    gifData: state.NewPage.gifData,
    gifStatus: state.NewPage.gifStatus,
    gifErrorMessage: state.NewPage.gifErrorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getGifData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
