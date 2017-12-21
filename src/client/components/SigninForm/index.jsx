import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Panel } from 'react-bootstrap';
import FormBody from './Form';

require('styles/app.scss');

const isAuthenticated = (auth) => {
  if (auth === 1) {
    return <p className="authSuccess">Authenticated!</p>;
  }
  if (auth === 0) {
    return <p className="authFailed">Authentication Failed!</p>;
  }
  return <p />;
};

const SigninForm = props => (
  <Grid>
    <Row className="show-grid">
      <Panel>
        <div className="formHeader">
          <h2>Sign In Now</h2>
          <p>Unlock awesome features</p>
          {
            isAuthenticated(props.isAuthenticated)
          }
        </div>
        <FormBody className="formBody" authenticate={props.authenticate} />
      </Panel>
    </Row>
  </Grid>
);

SigninForm.propTypes = {
  isAuthenticated: PropTypes.number.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export default SigninForm;
