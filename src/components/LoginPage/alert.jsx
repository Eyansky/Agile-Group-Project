import React from 'react';
import propTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

const Alert = ({ message }) => (
  <UncontrolledAlert color="warning">
    {message}
  </UncontrolledAlert>
);

Alert.propTypes = {
  message: propTypes.string,
};

Alert.defaultProps = {
  message: propTypes.string,
};
export default Alert;
