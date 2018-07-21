import React, { Component } from 'react';
import {
  Button, Form, Segment, Icon,
} from 'semantic-ui-react';
import './App.css';

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  signUp() {
    const { email, password, confirmPassword } = this.state;
    if (email !== '' && password !== '' && confirmPassword !== '') {
      console.log('this state is:', this.state);
    } else {
      console.log('You have to field out all the fields!');
    }
  }

  render() {
    return (
      <div className="form-container">
        <Segment className="register-container" raised color="teal" size="small" padded="very">
          <Form>
            <h2>
Sign Up
            </h2>
            <Form.Group widths="equal">
              <Form.Input
                label="Email"
                icon={<Icon name="at" />}
                placeholder="e-mail"
                type="text"
                onChange={e => this.setState({ email: e.target.value })}
              />

              <Form.Input
                label="Password"
                icon={<Icon name="key" />}
                placeholder="password"
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
              />

              <Form.Input
                label="Confirm password"
                icon={<Icon name="key" />}
                placeholder="Confirm password"
                type="password"
                onChange={e => this.setState({ confirmPassword: e.target.value })}
              />
            </Form.Group>
            <Button basic color="teal" type="button" onClick={() => this.signUp()}>
              Sign Up
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default register;
