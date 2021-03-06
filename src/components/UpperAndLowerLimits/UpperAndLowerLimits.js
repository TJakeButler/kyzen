import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button } from 'reactstrap';

export const UpperAndLowerLimits = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="upperLimit">Set Upper Temp Limit</Label>
        <Input
          type="upperLimit"
          name="upperLimit"
          id="upperLimit"
          placeholder="only numeric values allowed"
        />
        <Button color="warning">Set Upper Temp Limit</Button>
      </FormGroup>
      <FormGroup>
        <Label for="lowerLimit">Set Lower Temp Limit</Label>
        <Input
          type="lowerLimit"
          name="lowerLimit"
          id="lowerLimit"
          placeholder="only numeric values allowed"
        />
        <Button color="warning">Set Lower Temp Limit</Button>
      </FormGroup>
      <Button color="primary">Celcius</Button>{' '}
      <Button color="success">Fahrenheit</Button>{' '}
      </Form>
  );
}
