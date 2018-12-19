import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateArticle } from '../../actions/articles.action';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      favorited: [],
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { titleHolder, slug, updatearticle, descriptionHolder, bodyHolder } = this.props;
    const { title, description, body } = this.state;
    return (
      <div>
        <div className="form-group-lg title-input">
          <input name="title" type="text" onChange={this.handlechange} value={title} placeholder={titleHolder} className="form-control" />
        </div>
        <div className="form-group-lg description-input">
          <input value={description} onChange={this.handlechange} type="text" placeholder={descriptionHolder} name="description" className="form-control" />
        </div>
        <div className="form-control-lg body-input">
          <textarea name="body" onChange={this.handlechange} placeholder={bodyHolder} value={body} className="form-control " />
          <button
            type="submit"
            onClick={updatearticle(this.state, slug)}
            className="publish-btn btn btn-primary"
            style={{ background: '#2ebaae' }}
          >
          Update
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  titleHolder: propTypes.string,
  slug: propTypes.string,
  updatearticle: propTypes.func,
  descriptionHolder: propTypes.string,
  bodyHolder: propTypes.string,
};

Form.defaultProps = {
  titleHolder: '',
  slug: '',
  updatearticle: propTypes.func,
  descriptionHolder: '',
  bodyHolder: '',
};


function mapDispatchToProps(dispatch) {
  return {
    updatearticle: bindActionCreators(updateArticle, dispatch),
  };
}


export default connect(null, mapDispatchToProps)(Form);
