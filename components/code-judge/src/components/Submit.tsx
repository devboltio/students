import React from 'react';
import { Button } from 'react-bootstrap';

const Submit = () => {
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {}; //should trigger a loading component, spinner maybe.
  // And pass the user's code to the user answer

  return (
    <Button variant="success" type="submit" onClick={submit}>
      Submit
    </Button>
  );
};

export default Submit;
