/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import propTypes from 'prop-types';
// import './App.scss';
import { connect } from 'react-redux';
import SocialAuthAct from '../../actions/sociallogin.action';
// import { SocialAuthReducer } from '../../reducers/socialauthreducer';
import Buttons from './socialButton';


class SocialAuth extends Component {
    state = {
      access_token: '',
      provider: '',
    };

    onSignIn = (payload) => {
      this.setState({
        access_token: payload._token.accessToken,
        provider: payload._provider === 'google' ? 'google-oauth2' : payload._provider,
      });
      SocialAuthAct(this.state);
    };

    render() {
      const { social } = this.props;
      if (social.resolved) {
        const userToken = social.userData.user.token;
        if (userToken) {
          localStorage.setItem('userToken', userToken);
          window.location.replace('/home');
        }
      }
      return (
        <div className="w-25 col-centered">
          <Buttons onSignIn={this.onSignIn} />
        </div>
      );
    }
}
const mapStateToProps = social => ({
  social,
});
SocialAuth.propTypes = {
  social: propTypes.object,
};
SocialAuth.defaultProps = {
  social: propTypes.object,
};
export default connect(mapStateToProps, { SocialAuthAct })(SocialAuth);
