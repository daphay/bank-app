import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { validateFields } from '../Utils/Common';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  state = {
      first_name : '',
      last_name : '',
      email : '',
      password : '',
      conPassword : '',
      successMsg : '',
      errorMsg : '',
      isSubmitted : false
  };

  registerUser = (e) => {
      e.preventDefault();
      const {first_name, last_name, email,password, conPassword} = this.state;
      const fieldsToValidate = [
          {first_name},
          {last_name},
          {email},
          {password},
          {conPassword}
    ];

    const allFieldsEntered = validateFields(fieldsToValidate)
    if(!allFieldsEntered) {
        this.setState ({
            errorMsg : {
                signup_error : 'Please enter all fields.'
            }
        });
     } else {
        if(password !== conPassword) {
           this.setState({
               errorMsg : {
                   signup_error : 'Password does not match'
               }
           }) 
        } else{
            this.setState({
                isSubmitted : true
            })
        }
    }

  }
  handleInputChange = (e) => {
      const {name , value } = e.target;
      this.setState({
          [name] : value 
      });
  };
  

  render() {
      const {errorMsg,successMsg, isSubmitted} = this.state;
      return (
        <div className="login-page">
        <h3>Register User</h3>
        <div className="login-form">
          <Form onSubmit={this.registerUser}>
            {errorMsg && errorMsg.signup_error ? (
              <p className="errorMsg centered-message">
                {errorMsg.signup_error}
              </p>
            ) : (
              isSubmitted && (
                <p className="successMsg centered-message">{successMsg}</p>
              )
            )}
            <Form.Group controlId="first_name">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                placeholder="Enter first name"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Enter last name"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="conPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                name="conPassword"
                placeholder="Enter confirm password"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <div className="action-items">
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Link to="/" className="btn btn-secondary">
                Login
              </Link>
            </div>
          </Form>
        </div>
      </div> 
      );
  }
}

export default connect()(Register);