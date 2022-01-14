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
    <Row className="stickyBtm">
      <Col>
        <Card border="light" className="text-muted">
          <Card.Title as="p">Time Elapsed</Card.Title>
          <Card.Subtitle>
            {hours > 0 ? `${hours}` : ''}
            {minutes} min {seconds} sec
          </Card.Subtitle>
        </Card>
      </Col>
    </Row>
  );
};

export default Stopwatch;

// start button in app.tsx will start the timer and make the question visible

{
  /* </div> */
}
{
  /* <Button onClick={startQuiz}>Start</Button>
      <Button onClick={pause}>Pause</Button> */
}
{
  /* <button onClick={reset}>Reset</button> */
}
{
  /* ERROR WITH THE ONCLICK EVENT, NOT SURE HOW TO FIX. Could implement custom reset */
}
// </Container>
