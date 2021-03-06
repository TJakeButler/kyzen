import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button } from 'reactstrap';

export const UpperAndLowerLimits = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="upperLimit">Upper Limit</Label>
        <Input
          type="upperLimit"
          name="upperLimit"
          id="upperLimit"
          placeholder="only numeric values allowed"
        />
      </FormGroup>
      <FormGroup>
        <Label for="lowerLimit">Lower Limit</Label>
        <Input
          type="lowerLimit"
          name="lowerLimit"
          id="lowerLimit"
          placeholder="only numeric values allowed"
        />
      </FormGroup>
      <Button color="primary">celcius</Button>{' '}
      <Button color="success">fahrenheit</Button>{' '}
      </Form>
  );
}
