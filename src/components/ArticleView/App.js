import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';
import { viewSingleArticle } from '../../actions/articles.action';
import Body from './ArticleViewComponents';
import DeleteArticle from '../ArticleDelete/DeleteArticle';
import LikesDislikes from '../LikeDislike/likedislike';

class App extends Component {
  componentDidMount() {
    const slug = localStorage.getItem('slug');
    const { singleArticle } = this.props;
    singleArticle(slug);
  }

  render() {
    const { results } = this.props;
    return (
      <div
        className="container article-container"
        style={{ width: '100%',
          background: '#f5f5f5' }}
      >
        <DeleteArticle data={results} />
        <Body
          title={results.title}
          description={results.description}
          body={results.body}
        />
        <LikesDislikes />
      </div>
    );
  }
}

App.propTypes = {
  results: propTypes.object,
  singleArticle: propTypes.func,
};

App.defaultProps = {
  results: {},
  singleArticle: propTypes.func,
};


function mapStateToProps(state) {
  return {
    results: state.viewarticle,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    singleArticle: bindActionCreators(viewSingleArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
