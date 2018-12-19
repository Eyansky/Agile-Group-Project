import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import swal from 'sweetalert';
import './like.scss';
import { likesArticleActions, dislikesArticleActions, getlikesArticleActions, getdislikesArticleActions } from '../../actions/likesDislikesactions';

export class LikesDislikes extends Component {
  state = {
    likeloading: false,
    dislikeloading: false,
    likes: 0,
    dislikes: 0,
  };

  componentDidMount() {
    const slug = localStorage.getItem('slug');
    const storage = JSON.parse(localStorage.getItem('user'));
    const headers = {
      Authorization: `Bearer ${storage.token}`,
    };
    axios.get(`${process.env.REACT_APP_URL}article/like/${slug}/`, { headers })
      .then((res) => {
        this.setState({ likes: res.data.response });
      });
    axios.get(`${process.env.REACT_APP_URL}article/dislike/${slug}/`, { headers })
      .then((res) => {
        this.setState({ dislikes: res.data.response });
      });
  }

  handleLikeClick = () => {
    const slug = localStorage.getItem('slug');
    this.setState({ likeloading: true });
    this.props.likesArticleActions(slug)
      .then((res) => {
        if (res.status === 200) {
          this.forceUpdate();
          swal(res.data.response);
        }
      });
    setTimeout(() => { this.setState({ likeloading: false }); }, 1000);
    this.forceUpdate();
  };

  handleDislikeClick = () => {
    const slug = localStorage.getItem('slug');
    this.setState({ dislikeloading: true });
    this.props.dislikesArticleActions(slug);
    this.setState({ dislikeloading: false });
    setTimeout(() => { this.setState({ dislikeloading: false }); this.forceUpdate(); }, 1000);
  }

  render() {
    const { likeloading, dislikeloading, likes, dislikes } = this.state;
    return (
      <div>
        <button type="button" id="likebutton" className="btn btn-default btn-responsive up_button" onClick={this.handleLikeClick}>
          {likeloading ? <i className="fa fa-spinner fa-spin like-spinners thumbsup" /> : <i className="fa fa-thumbs-up fa-2x" id="thumbsup" />}
          {' '}
          {likes}
        </button>
        <button type="button" id="likebutton" className="btn btn-default btn-responsive up_button" onClick={this.handleDislikeClick}>
          {dislikeloading ? <i className="fa fa-spinner fa-spin like-spinners thumbsdown" /> : <i className="fa fa-thumbs-down fa-2x" id="thumbsdown" /> }
          {' '}
          { dislikes }
        </button>
      </div>
    );
  }
}

LikesDislikes.propTypes = {
  likesArticleActions: PropTypes.func.isRequired,
  dislikesArticleActions: PropTypes.func.isRequired,
  getlikesArticleActions: PropTypes.func.isRequired,
  getdislikesArticleActions: PropTypes.func.isRequired,
};

export default connect(
  null,
  { likesArticleActions, dislikesArticleActions, getlikesArticleActions, getdislikesArticleActions },
)(LikesDislikes);
