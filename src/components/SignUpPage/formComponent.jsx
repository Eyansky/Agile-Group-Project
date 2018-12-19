import React from 'react';
import propTypes from 'prop-types';
import 'bootstrap';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const InputElement = ({
  name,
  placeholder,
  type,
  value,
  id,
  handleChange,
}) => (
  <input
    name={name}
    placeholder={placeholder}
    type={type}
    id={id}
    required
    value={value}
    onChange={handleChange}
  />
);

const formGroup = 'form-group';
export const Form = ({
  username,
  password,
  email,
  confirmPassword,
  handleChange,
}) => (
  <div>
    <div className="form-group">
      <span>
        <label htmlFor="username">
          <span className="glyphicon glyphicon-user" />
        </label>
        <InputElement
          name="username"
          placeholder="Enter Username"
          type="text"
          id="username"
          required
          value={username}
          handleChange={handleChange}
        />
      </span>
    </div>
    <div className={formGroup}>
      <div className="myDiv">
        <label htmlFor="email">
          <span className="glyphicon glyphicon-envelope" />
        </label>
        <InputElement
          name="email"
          placeholder="Enter Email"
          type="email"
          id="email"
          required
          value={email}
          handleChange={handleChange}
        />
      </div>
    </div>
    <div className={formGroup}>
      <label htmlFor="pass">
        <span className="glyphicon glyphicon-lock" />
      </label>
      <InputElement
        name="password"
        placeholder="Enter Password"
        type="password"
        id="pass"
        required
        value={password}
        handleChange={handleChange}
      />
    </div>
    <div className={formGroup}>
      <section>
        <label htmlFor="re-pass">
          <span className="glyphicon glyphicon-lock" />
        </label>
        <InputElement
          name="confirmPassword"
          placeholder="Repeat Password"
          type="password"
          id="re_pass"
          required
          value={confirmPassword}
          handleChange={handleChange}
        />
      </section>
    </div>
  </div>
);

InputElement.propTypes = {
  name: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  id: propTypes.string,
  handleChange: propTypes.func,
};

InputElement.defaultProps = {
  name: '',
  placeholder: '',
  type: '',
  value: '',
  id: '',
  handleChange: propTypes.func,
};

Form.propTypes = {
  handleChange: propTypes.func,
  email: propTypes.string,
  password: propTypes.string,
  username: propTypes.string,
  confirmPassword: propTypes.string,
};

Form.defaultProps = {
  handleChange: propTypes.func,
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
};

export default Form;
