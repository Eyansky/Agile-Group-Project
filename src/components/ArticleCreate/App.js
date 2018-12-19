import React from 'react';
import './App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postArticle } from '../../actions/articles.action';
import BodyinputComponent from './InputComponents';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
    };
    this.handlechange = this.handlechange.bind(this);
    this.cleardata = this.cleardata.bind(this);
  }

  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  cleardata() {
    this.setState({
      title: '',
      description: '',
      body: '',
    });
  }


  render() {
    const { postarticle } = this.props;
    const { title, description, body } = this.state;
    return (
      <div className="form-input">
        <BodyinputComponent
          cleardata={this.cleardata}
          postArticle={postarticle}
          data={this.state}
          body={body}
          handlechange={this.handlechange}
          title={title}
          description={description}
        />
      </div>
    );
  }
}

App.propTypes = {
  postarticle: propTypes.func,
};

App.defaultProps = {
  postarticle: propTypes.func,
};

function mapStateToProps(state) {
  return {
    tags: state.tags,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    postarticle: bindActionCreators(postArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
