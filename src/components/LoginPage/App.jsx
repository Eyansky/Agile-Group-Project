/* eslint-disable max-len */
import '../style.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loginUser from '../../actions/login.action';
import Alert from './alert';
import SocialLoginConnected from './SocialLogin';
import FormGroups from './form';
import { SignupLoginLink } from '../SignUpPage/registerComponent';
const image = require('../../assets/images/1505193005.jpg');

function validateLoginInputs(email, password) {
  // store errors in arraya and render as needed.
  const errors = [];
  if (email.length < 5) {
    errors.push('Email should be at least 5 charcters long');
  }
  if (email.split('').filter(x => x === '@').length !== 1) {
    errors.push('Email should contain a @');
  }
  if (email.indexOf('.') === -1) {
    errors.push('Email should contain at least one dot');
  }

  if (password.length < 8) {
    errors.push('Password should be at least 8 characters long');
  }

  return errors;
}

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      errors: [],
      logged: false,
    };
  }

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { dispatch } = this.props;
      const { email, password } = this.state;
      const errors = validateLoginInputs(email, password);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
      dispatch(loginUser(this.state, this.props));
    }

    render() {
      const { userData } = this.props;
      const { email, password, errors } = this.state;
      return (
        <section className="sign-in">
          <div className="container">
            <div className="signin-content col-md-10">
              <SignupLoginLink imageClass="signin-image" image={image} link="/register" text="Click here to register"/>
              <div className="signin-form" />
              <div className="col-md-5">
                <h2 className="form-title">Sign In</h2>
                <SocialLoginUl />
                <span className="social-label">Or</span>
                <form method="POST" className="register-form" id="login-form">
                  {errors.map(error => (
                    <p className="errors" key={error}>{error}</p>
                  ))}
                  {userData.errors
                    ? <Alert message={userData.responseData.data.errors.error[0]} /> : ''}
                  <FormGroups
                    email={email}
                    password={password}
                    handleChange={this.handleChange}
                  />
                  <FormGroup handleSubmit={this.handleSubmit} />
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
}

export const SocialLoginUl = () => (
  <div className="social-login">
    <ul className="socials">
      <SocialLoginConnected />
    </ul>
  </div>
);

// solve code length
export const FormGroup = ({ handleSubmit }) => (
  <div className="form-group form-button">
    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={handleSubmit} />
    <div className="forgot-password">
      <Link to="/resetPassword" className="btn btn-link">Forgot Password?</Link>
    </div>
  </div>
);

FormGroup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

Login.defaultProps = {
  // dispatch: PropTypes.func,
  userData: {},
};
// pass the login reducer for maping as props to the login component
const mapStateToProps = ({ login }) => ({
  userData: login,
});

export default connect(mapStateToProps)(Login);
