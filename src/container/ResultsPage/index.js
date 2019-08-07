import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './styles.css';
import LikedGifImages from '../../component/LikedGifImages/index';
// New Page's actions
import { onStartOver } from '../WeirdnessCalculator/actions';

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  likedGifs = () => {
    return this.props.likedGifs.map((gif) => {
      const name = gif.name.length > 31 ? `${gif.name.slice(0,27)}...` : gif.name;

      return <LikedGifImages weirdness={gif.weirdness.toString()} name={name} url={gif.url} key={gif.id} onRemoveGifClick={this.onRemoveLikedGif} />;
    })
  }

  averageWeirdness = () => {
    let sumWeirdness = null;
    this.props.likedGifs.map((x) => { sumWeirdness += parseInt(x.weirdness); return null; });
    const averageWeirdness = sumWeirdness / 5;
    return Math.round(averageWeirdness);
  }

  render() {
    const btnText = this.props.likedGifs.length > 0 ? 'START OVER' : 'START WEIRDNESS CALCULATION'
    const resultHeader = this.props.likedGifs.length > 0 ? `You scored an ${this.averageWeirdness()} out of 10 on the weirdness scale!` : 'You haven\'t liked any GIFs yet. Click on "START WEIRDNESS CALCULATION" to get started.';
    return(
      <div>
        <div className="pgHeader"><h3>Weirdness Calculator</h3></div>
        <h4 className="resultPgResults">{resultHeader}</h4>
        {this.props.likedGifs.length > 0 ? <h5 className="resultPgHeader">The GIFs you liked</h5> : null}
        {this.likedGifs()}
        <div className="soLink"><Link onClick={this.props.onStartOver} to="/" className="gifBtn">{btnText}</Link></div>
      </div>
    );
  }
}

ResultsPage.propTypes = {

};

ResultsPage.defaultProps = {

};


function mapStateToProps(state) {
  return {
    likedGifs: state.WeirdnessCalculator.likedGifs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onStartOver }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
