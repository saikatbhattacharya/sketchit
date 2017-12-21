import React, { Component } from 'react';
import { Button, Form, Radio, Icon } from 'semantic-ui-react';

class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <Form className="selectFrom">
        <Form.Group inline>
          <Form.Field control={Radio} label="Material UI" value="1" checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Radio} label="Semantic UI" value="2" checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Radio} label="Bootstrap" value="3" checked={value === '3'} onChange={this.handleChange} />
        </Form.Group>
        <Button primary icon>
          <Icon name="arrow circle right" />
        </Button>
      </Form>
    );
  }
}

export default SelectForm;
