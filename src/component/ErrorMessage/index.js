import React from 'react';
import PropTypes from 'prop-types';

// import './styles.css';

const ErrorMessage = ({ isError, message }) => {
  console.log('here')
  return (
    <div>
      {isError ?
        <h4 className="error">{message ? message : 'An error has occured.'}</h4>
      : null}
    </div>
  );
};

ErrorMessage.propTypes = {
  isError: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
