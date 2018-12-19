import React from 'react';
import './App.scss';
import './Animation.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { getAllArticles } from '../../actions/articles.action';
import ArticleCard from './containers';
import { USER_IMAGE } from '../../constants/articles';

const App = function displayArticle(props) {
  const { fetchAllArticles, articles } = props;
  fetchAllArticles();
  const newArticles = articles.map(article => (
    <ArticleCard
      key={article.id}
      slug={article.slug}
      title={article.title}
      article={article}
      username={article.author.username}
      timecreated={article.timecreated}
      description={article.description}
      userimage={USER_IMAGE}
    />
  ));
  return (
    <div className="card-columns article-container">
      {newArticles}
    </div>
  );
};

App.propTypes = {
  fetchAllArticles: propTypes.func,
  articles: propTypes.func,
};

App.defaultProps = {
  fetchAllArticles: propTypes.func,
  articles: propTypes.func,
};

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    fetchAllArticles: bindActionCreators(getAllArticles, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
