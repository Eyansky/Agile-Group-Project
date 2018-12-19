import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticleApi } from '../../actions/articles.action';

class DeleteArticle extends Component {
  handleDelete =() => {
    const { dispatch, data } = this.props;
    dispatch(deleteArticleApi(data.slug));
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="control-btn">
          <button className="btn btn-secondary" type="button" onClick={this.handleDelete}>Delete</button>
          <a href={`/article/update/${data.slug}`} onClick={this.saveArticle} className="btn edit" type="button" style={{ background: '#009688', color: '#fff' }}>
            Edit
          </a>
        </div>
      </div>
    );
  }
}

DeleteArticle.propTypes = {
  data: {},
};

DeleteArticle.defaultProps = {
  data: {},
};

const mapStateToProps = ({ deleteReducer }) => ({
  deleteReducer,
});
DeleteArticle.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  handleDelete: propTypes.func,
};
DeleteArticle.propTypes = {
  dispatch: propTypes.func.isRequired,
};
DeleteArticle.defaultProps = {
  handleDelete: propTypes.func,
};

export default connect(mapStateToProps)(DeleteArticle);
