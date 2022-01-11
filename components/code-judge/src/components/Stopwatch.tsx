import { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

const Stopwatch: React.FC<Props> = ({ time }) => {
  const [state, setState] = useState<State>({
    time: 0,
    seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
    minutes: Math.floor((time - 1) / 60),
  });

  useEffect(() => {
    setTimeout(() => {
      if (state.time === 0) {
        return;
      }
    });
  });

  return (
    <Container>
      <h5>Time so far</h5>
      <p>{`${state.minutes}: ${
        state.seconds <= 10 ? `0${state.seconds}` : state.seconds
      }`}</p>
    </Container>
  );
};

export default Stopwatch;
