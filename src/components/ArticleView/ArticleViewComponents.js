import React from 'react';
import 'bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from 'prop-types';

export const Article = (props) => {
  const { title, description, body } = props;
  return (
    <div className="container-fluid">
      <h2>{title}</h2>
      <div className="">
        <p>{description}</p>
      </div>
      <div className="article-body">
        {body}
      </div>
    </div>
  );
};

Article.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  body: propTypes.string,
};

Article.defaultProps = {
  title: '',
  description: '',
  body: '',
};


export default Article;
