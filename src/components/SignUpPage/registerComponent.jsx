import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import signUpRequest from '../../actions/signup.actions';
import { Form } from './formComponent';
import 'bootstrap';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const image = require('../../assets/images/blog-49006_640.png');

let popup = '';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit = () => {
      this.setState({ submitted: true });
      const { username, email, password } = this.state;
      const { signUp, success } = this.props;
      if (username && email && password) {
        signUp({ ...this.state });
      } else if (success === false) {
        this.errorMessage();
      }
    };

    errorMessage = () => {
      const { message, success } = this.props;

      if (message instanceof Array) {
        popup = message.map(mess => (
          <div
            className={success ? 'text-success' : 'text-danger'}
          >
            {mess}
          </div>
        ));
      } else {
        popup = (
          <div>
            {' '}
            {message}
            {' '}
          </div>
        );
      }
      return <div className={success ? 'text-success' : 'text-danger'}>{popup}</div>;
    };

    handleChange =(e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    render() {
      const { username, password, email, confirmPassword } = this.state;
      const { visible } = this.props;
      return (
        <section className="signup">
          <div className="container">
            <div className="signup-content col-md-12">
              <div className="col-md-7">
                <div className="signup-form ">
                  <h2 className="form-title">Sign up</h2>
                  <form className="register-form" id="signup-form" onSubmit={this.handleSubmit}>
                    <div>
                      { visible && this.errorMessage()}
                    </div>

                    <Div {...this.state} />
                    <Errors {...this.state} />
                    <Form
                      username={username}
                      email={email}
                      password={password}
                      confirmPassword={confirmPassword}
                      handleChange={this.handleChange}
                    />
                    <div className="form-group form-button">
                      <input type="button" name="signup" id="signup" className="form-submit" value="Register" onClick={() => this.handleSubmit()} />
                    </div>
                  </form>
                </div>
              </div>
              <SignupLoginLink imageClass="signup-image" image={image} link="/login" text="Already have an account?" />
            </div>
          </div>
        </section>
      );
    }
}

// this component is meant to soleve code climate issue of the same code appearing App.jsx
export const SignupLoginLink = ({ imageClass, image, link, text }) => (
  <div className="col-md-5">
    <div className={imageClass}>
      <figure><img src={image} alt="" /></figure>
      <Link to={link} className="btn">{text}</Link>
    </div>
  </div>
);

export const Errors = ({ ...props }) => {
  const { submitted, username, password, confirmPassword, email } = props;
  return (
    <div className={`form-group${submitted && !username && submitted && !email
      && submitted && !password && submitted && !confirmPassword ? ' has-error' : ''}`}
    />
  );
};

export const Div = ({ ...props }) => {
  const { username, password, email, confirmPassword, submitted, ...rest } = props;
  return (
    <div className="alert-info, form-group" {...rest}>
      {submitted && !username
            && <div className="text-danger">Username is required</div>}
      {submitted && !email
              && <div className="text-danger">Enter a valid email (e.g email@email.com)</div>}
      {submitted && !password
            && <div className="text-danger">Password is required</div> }
      {submitted && !confirmPassword && (
      <div className="text-danger">Confirm Password is required</div>)}
    </div>
  );
};

SignupLoginLink.propTypes = {
  imageClass: propTypes.string,
  image: propTypes.string,
  link: propTypes.string,
};

SignupLoginLink.defaultProps = {
  imageClass: '',
  image: '',
  link: '',
};

Errors.propTypes = {
  handleChange: propTypes.func,
  email: propTypes.string,
  password: propTypes.string,
  username: propTypes.string,
  submitted: propTypes.bool,
  confirmPassword: propTypes.string,
};
Errors.defaultProps = {
  handleChange: propTypes.func,
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
  submitted: '',
};

RegisterPage.propTypes = {
  signUp: propTypes.func.isRequired,
  visible: propTypes.bool,
};

RegisterPage.defaultProps = {
  visible: '',
};
const mapStateToProps = state => ({
  visible: state.registration.visible,
  message: state.registration.message,
  success: state.registration.success,
});


const matchDispatchToProps = dispatch => bindActionCreators({
  signUp: signUpRequest,
}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(RegisterPage);
