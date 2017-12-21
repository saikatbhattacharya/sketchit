import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

class FormBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameValidationstate: null,
      passwordValidationstate: null,
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.state.username.length === 0) {
      this.setState({ usernameValidationstate: 'error' });
    }
    if (this.state.password.length === 0) {
      this.setState({ passwordValidationstate: 'error' });
    }
    if (this.state.password.length !== 0 && this.state.username.length !== 0) {
      this.props.authenticate({
        username: this.state.username,
        password: this.state.password,
      });
    }
  }

  handleUsernameChange(e) {
    if (e.target.value.length > 0) {
      this.setState({ usernameValidationstate: null });
    }
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    if (e.target.value.length > 0) {
      this.setState({ passwordValidationstate: null });
    }
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form className="signInForm">
        {
          (this.state.usernameValidationstate === 'error')
          ?
            <p className="usernameRequired">Required Field</p>
          :
            <p />
        }
        <FormGroup
          controlId="formControlsUsername"
          validationState={this.state.usernameValidationstate}
        >
          <ControlLabel>Username</ControlLabel>
          <FormControl
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </FormGroup>
        {
          (this.state.passwordValidationstate === 'error')
          ?
            <p className="usernameRequired">Required Field</p>
          :
            <p />
        }
        <FormGroup
          controlId="formControlsPassword"
          validationState={this.state.passwordValidationstate}
        >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </FormGroup>
        <div className="helperText">
          <Checkbox>
            Keep me logged in
          </Checkbox>
          <div className="forgotPassword"><a href="/">Forgot Password?</a></div>
        </div>
        <Button bsStyle="primary" bsSize="large" block onClick={this.onSubmit}>Sign In</Button>
      </form>
    );
  }
}

FormBody.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default FormBody;
