import React from 'react';
import './App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewSingleArticle } from '../../actions/articles.action';
import UpdateComponent from './UpdateForm';


const App = (props) => {
  const slug = localStorage.getItem('slug');
  const { results, singleArticle } = props;
  singleArticle(slug);
  return (
    <div className="form-input">
      <UpdateComponent
        slug={results.slug}
        titleHolder={results.title}
        descriptionHolder={results.description}
        bodyHolder={results.body}
      />
    </div>
  );
};

App.propTypes = {
  results: propTypes.object,
  singleArticle: propTypes.func,
};

App.defaultProps = {
  results: {},
  singleArticle: propTypes.func,
};


function mapStateToProps({ viewarticle }) {
  return {
    results: viewarticle,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singleArticle: bindActionCreators(viewSingleArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
