import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from 'prop-types';

import { TitleHint } from '../../constants/articles';


const BodyinputComponent = (props) => {
  const { description, body, handlechange, cleardata, postArticle, data, title } = props;
  return (
    <div>
      <div className="form-group-lg title-input">
        <input name="title" value={title} onChange={handlechange} className="form-control description" placeholder={TitleHint} />
      </div>
      <div className="form-group-lg description-input">
        <input style={{ width: '97%', marginLeft: '2%' }} name="description" value={description} onChange={handlechange} className="form-control description" placeholder="description" />
      </div>
      <div className="form-control-lg body-input">
        <textarea name="body" onChange={handlechange} value={body} className="form-control description " placeholder="body" />
        <button
          onClick={() => { postArticle(data); cleardata(); }}
          type="submit"
          className="publish-btn btn btn-primary"
          style={{ background: '#2ebaae' }}
        >
          Publish
        </button>
      </div>
    </div>);
};

BodyinputComponent.propTypes = {
  postArticle: propTypes.func,
  data: propTypes.object,
  title: propTypes.string,
  cleardata: propTypes.func,
  handlechange: propTypes.func,
  body: propTypes.string,
  description: propTypes.string,
};

BodyinputComponent.defaultProps = {
  postArticle: propTypes.func,
  data: {},
  title: '',
  cleardata: propTypes.func,
  handlechange: propTypes.func,
  body: '',
  description: '',
};


export default BodyinputComponent;
