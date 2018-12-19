/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Input, FormFeedback, Alert, Label } from 'reactstrap';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import sendEmail from '../../actions/resetPassword';
import './style.scss';


export class ResetPasswordComponent extends Component {
    state = {
      email: '',
      errors: {},
      loading: false,
    };

    handleChange = (e) => {
      const { errors } = this.state;
      if (errors[e.target.name]) {
        delete errors[e.target.name];
        this.setState({
          [e.target.name]: e.target.value,
        });
      } else {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    };

    handleSubmit = (e) => {
      const { email } = this.state;
      e.preventDefault();
      const errors = {};
      if (email === '') errors.email = 'Email is required';
      this.setState({ errors });

      const isValid = Object.keys(errors).length === 0;

      if (isValid) {
        this.setState({ loading: true });
        // eslint-disable-next-line react/destructuring-assignment
        this.props
          .sendEmail({ user: { email } })
          // eslint-disable-next-line consistent-return
          .then((res) => {
            if (res.status === 200) {
              this.setState({ loading: false });
              swal('Success', 'check your email to continue');
            }
          })
          .catch((err) => {
            this.setState({ loading: false });
            swal('Sorry', 'Email is not recognised');
          });
      }
    };

    render() {
      const { email, errors, loading } = this.state;
      return (
        <div className="container outer">
          <div className="my-container">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Col sm={12}>
                  <div />
                  <Label id="label" className="form-header"> Reset Password</Label>
                </Col>
                <br />
                <Col sm={4} className="form-content">
                  <Input name="email" id="email" type="email" value={email} onChange={this.handleChange} placeholder="Enter email" />
                  <FormFeedback>{errors.email}</FormFeedback>
                  <br />
                  <div className="button">
                    <Button className="mybtn" id="button" type="submit"> {loading ? 'Loading...' : 'Reset Password'} </Button>
                  </div>
                  <br />
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      );
    }
}

ResetPasswordComponent.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(
  null,
  { sendEmail },
)(ResetPasswordComponent);
