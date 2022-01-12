import * as React from 'react';
import { Button } from 'react-bootstrap';

type ButtonProps = {
  title: string;
  time?: number;
  onClick: (time?: number) => void;
};

function BeginButton({ title, time, onClick }: ButtonProps) {
  return (
    <Button className={'button'} title={title} onClick={() => onClick(time)}>
      {title}
    </Button>
  );
}

export default BeginButton;
