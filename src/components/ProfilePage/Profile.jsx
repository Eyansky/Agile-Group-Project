import React, { Component } from 'react';
import './Profile.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Swal from 'sweetalert2';
import propTypes from 'prop-types';

import { getProfileAction, userArticlesAction, updateUserProfileAction } from '../../actions/profile.action';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      profileArticlesData: {},
      usernameUpdate: '',
      bioUpdate: '',
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.onSuccess = this.onSuccess.bind(this);

    const { username } = this.props.match.params;

    getProfileAction(username).payload.then(p => this.setState({ profile: p.data.profile }));
    userArticlesAction(username).payload.then(p => this.setState({ profileArticlesData: p.data }));
  }

  onSuccess = (username) => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.username = username;
    localStorage.setItem('user', JSON.stringify(user));
    const url = `${window.location.protocol}//${window.location.host}/profile/${username}`;

    window.open(url, '_self');
  };

  handleEditClick() {
    Swal({
      title: 'Edit profile',
      confirmButtonText: 'Submit',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="username">'
        + '<input id="swal-input2" class="swal2-input" placeholder="Bio">',
      focusConfirm: false,
      preConfirm: () => [
        this.setState({ usernameUpdate: document.getElementById('swal-input1').value }),
        this.setState({ bioUpdate: document.getElementById('swal-input2').value }),
        updateUserProfileAction({ username: this.state.usernameUpdate, bio: this.state.bioUpdate }),
        this.onSuccess(this.state.usernameUpdate),
      ],
    });
  }

  render() {
    return (
      <div className="rela-block container-profile">
        <div className="rela-block profile-card">
          <div className="profile-pic" id="profile_pic" />
          <ProfileNameCard username={this.state.profile.username} bio={this.state.profile.bio} />
          <div className="rela-block profile-card-stats">
            <div className="floated profile-stat articles" id="num_works">
              {this.state.profileArticlesData.count}
            </div>
            {JSON.parse(localStorage.getItem('user')).username === this.state.profile.username
              ? (
                <div className="floated profile-stat">
                  <button type="button" className="btn btn-outline-dark" onClick={() => this.handleEditClick()}>Edit</button>
                </div>
              )
              : (
                <div className="floated profile-stat">
                  <button type="button" className="btn btn-outline-dark">Follow</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export const ProfileNameCard = ({ ...props }) => (
  <div className="rela-block profile-name-container">
    <div className="rela-block user-name" id="user-name">{props.username}</div>
    <div className="rela-block user-desc" id="user-description">{props.bio}</div>
  </div>
);

Profile.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      username: propTypes.string.isRequired,
    }),
  }),
};

Profile.defaultProps = {
  match: {
    params: '',
  },
};

ProfileNameCard.propTypes = {
  username: propTypes.string,
  bio: propTypes.string,
};

ProfileNameCard.defaultProps = {
  username: '',
  bio: '',
};

export default Profile;
