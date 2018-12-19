import React from 'react';
import propTypes from 'prop-types';
import 'bootstrap';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormGroups = ({ email, password, handleChange }) => (
  <div>
    <div className="form-group">
      <label htmlFor="email">
        <span className="glyphicon glyphicon-envelope" />
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleChange}
        id="email"
      />
    </div>
    <div className="form-group">
      <label htmlFor="pass"><span className="glyphicon glyphicon-lock" /></label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter Password"
        value={password}
        onChange={handleChange}
      />
    </div>
  </div>
);
FormGroups.propTypes = {
  handleChange: propTypes.func,
  email: propTypes.string,
  password: propTypes.string,
};

FormGroups.defaultProps = {
  handleChange: propTypes.func,
  email: '',
  password: '',
};

export default FormGroups;
