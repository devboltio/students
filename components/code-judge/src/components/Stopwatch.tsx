import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { useStopwatch } from 'react-timer-hook';

interface StopwatchProps {
  onClick: (time?: number) => void;
}

const Stopwatch: React.FC<StopwatchProps> = (startClock) => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  // const makeQuestionVisible = () => {
  //   // makes the Q visible
  // };

  // const startQuiz = () => {
  //   start(); //starts the stopwatch
  //   makeQuestionVisible();
  // };

  return (
    <Container>
      {/* <div style={{ fontSize: '100px' }}> */}
      <Card border="danger">
        <Card.Title>Time Elapsed</Card.Title>
        <Card.Body>
          {hours > 0 ? `${hours}` : ''}
          {minutes} min {seconds} sec
        </Card.Body>
      </Card>
      {/* </div> */}
      {/* <Button onClick={startQuiz}>Start</Button>
      <Button onClick={pause}>Pause</Button> */}
      {/* <button onClick={reset}>Reset</button> */}
      {/* ERROR WITH THE ONCLICK EVENT, NOT SURE HOW TO FIX. Could implement custom reset */}
    </Container>
  );
};

export default Stopwatch;

// start button in app.tsx will start the timer and make the question visible
