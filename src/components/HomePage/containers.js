import React from 'react';
import './App.scss';
import './Animation.scss';
import 'bootstrap';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './ArticleComponents';

const ArticleCard = (props) => {
  const { userimage, slug, timecreated, username, description, title, image } = props;
  return (
    <Card
      userimage={userimage}
      slug={slug}
      time={timecreated}
      username={username}
      description={description}
      title={title}
      image={image}

    />
  );
};

ArticleCard.propTypes = {
  userimage: propTypes.string,
  timecreated: propTypes.string,
  description: propTypes.string,
  username: propTypes.string,
  title: propTypes.string,
  image: propTypes.string,
  slug: propTypes.string,
};

ArticleCard.defaultProps = {
  userimage: '',
  timecreated: '',
  description: '',
  username: '',
  title: '',
  image: '',
  slug: '',
};


export default ArticleCard;
