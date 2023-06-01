import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      notify: false,
      emailDirty: false,
      messageDirty: false,
      emailError: 'Email не может быть пустым',
      messageError: 'Поле не может быть пустым',
      formValid: false
      
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked
    });
  };

  validateField = (fieldName, value) => {
    let { emailError, messageError } = this.state;

    switch (fieldName) {
      case 'email':
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!value || !emailRegex.test(value.toLowerCase())) {
          emailError = 'Некорректный email';
        } else {
          emailError = '';
        }
        break;
      case 'message':
        if (!value) {
          messageError = 'Поле не может быть пустым';
        } else {
          messageError = '';
        }
        break;
      default:
        break;
    }

    this.setState(
      {
        emailError,
        messageError
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const { emailError, messageError } = this.state;
    const formValid = !emailError && !messageError;
    this.setState({ formValid });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, message, notify } = this.state;
    console.log('Отправленная форма:', { email, message, notify });
    this.setState({
      email: '',
      message: '',
      notify: false,
      emailDirty: false,
      messageDirty: false,
      emailError: 'Email не может быть пустым',
      messageError: 'Поле не может быть пустым',
      formValid: false
    });
  };

  render() {
    const { email, message, notify, emailDirty, messageDirty, emailError, messageError, formValid } = this.state;

    return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Contact us</h2>
        <Form style={{ maxWidth: '300px' }} onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              onBlur={() => this.setState({ emailDirty: true })}
              placeholder="Enter email"
              style={{ marginBottom: 3, maxWidth: '300px'}}
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            {messageDirty && messageError && <div style={{ color: 'red' }}>{messageError}</div>}
            <Form.Control
              as="textarea"
              name="message"
              value={message}
              onChange={this.handleInputChange}
              onBlur={() => this.setState({ messageDirty: true })}
              placeholder="Enter message"
              
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Check
              type="checkbox"
              name="notify"
              checked={notify}
              onChange={this.handleCheckboxChange}
              label="Notify me"
              style={{ marginRight: 'auto' }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!formValid}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}




