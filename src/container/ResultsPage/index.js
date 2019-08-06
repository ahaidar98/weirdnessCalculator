import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './styles.css';
import LikedGifImages from '../../component/LikedGifImages/index';
// New Page's actions
import { onStartOver } from '../NewPage/actions';

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
    return(
      <div>
        <div className="pgHeader"><h3>Weirdness Calculator</h3></div>
        <h4 className="resultPgResults">You scored an {this.averageWeirdness()} out of 10 on the weirdness scale!</h4>
        <h5 className="resultPgHeader">The GIFs you liked</h5>
        {this.likedGifs()}
        <div className="soLink"><Link onClick={this.props.onStartOver} to="/" className="gifBtn">START OVER</Link></div>
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
    likedGifs: state.NewPage.likedGifs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onStartOver }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
