import React from 'react';
import '../style.scss';
import SocialLogin from 'react-social-login';
import propTypes from 'prop-types';

const google = require('../../assets/images/search.png');
const facebook = require('../../assets/images/facebook.png');

const buttonsocial = ({ children, triggerLogin, ...props }) => (
  <button type="button" onClick={triggerLogin} {...props}>
    { children }
  </button>
);
const SocialButton = SocialLogin(buttonsocial);

const Buttons = ({ onSignIn }) => (
  <div>
    <SocialButton
      className="btn btn-block btn-social btn-google"
      provider="google"
      appId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onLoginFailure={onSignIn}
      onLoginSuccess={onSignIn}
    >
      <img src={google} alt="" />
      <span> Signin with Google </span>
    </SocialButton>
    <SocialButton
      className="btn btn-block btn-social btn-facebook"
      provider="facebook"
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      onLoginSuccess={onSignIn}
    >
      <img src={facebook} alt="" />
      <span> Signin with Facebook </span>
    </SocialButton>
  </div>
);

Buttons.propTypes = {
  onSignIn: propTypes.func,
};

Buttons.defaultProps = {
  onSignIn: propTypes.func,
};


export default Buttons;
