import { Button, Col, Container, Row } from 'react-bootstrap';
import { useStopwatch } from 'react-timer-hook';

const Stopwatch = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  return (
    <Container>
      <div style={{ fontSize: '100px' }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <Button onClick={start}>Start</Button>
      {/* <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </Container>
  );
};

export default Stopwatch;
