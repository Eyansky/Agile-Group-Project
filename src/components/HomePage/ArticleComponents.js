import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import baseUrl from '../../constants/url';
import { ReadMore } from '../../constants/articles';


const Body = (props) => {
  const { slug, title, description, time, userimage, username } = props;
  const url = `${baseUrl}/profile/${username}`;
  return (
    <div className="card slide" style={{ background: '#FFFFFF' }}>
      <div className="card-text">
        <img alt="" className="img-rounded userimage" src={userimage} />
        <div className="text">
          <a className="small username title" href={url}>
            {username}
          </a>
          <span className="small time">{time}</span>
        </div>
        <div className="clear" />
      </div>
      <div className="article-content">
        <img className="card-img-top" alt="" src="https://picsum.photos/800/200?random" />
        <a href={`/article/detail/${slug}`} onClick={() => (localStorage.setItem('slug', slug))} className="title">
          {
      title
    }
        </a>
        <div className="lead">
          <p className="text-left">
            {description}
            <Link to={`/article/detail/${slug}`}>
              <button onClick={() => (localStorage.setItem('slug', slug))} type="button" className="btn" style={{ background: '#009688', color: '#fff' }}>
                {ReadMore}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  userimage: propTypes.string,
  description: propTypes.string,
  username: propTypes.string,
  title: propTypes.string,
  time: propTypes.string,
  slug: propTypes.string,
};

Body.defaultProps = {
  userimage: '',
  description: '',
  username: '',
  title: '',
  slug: '',
  time: '',
};


export default Body;
