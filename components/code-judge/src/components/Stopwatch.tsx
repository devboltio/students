import * as React from 'react';
import { Container } from 'react-bootstrap';
import BeginButton from './BeginButton';

type StopwatchProps = {
  time: number;
};

interface TimeState {
  time: number;
  stopwatch: number;
}

function StopwatchFunc({ time }: StopwatchProps) {
  const [min, setMin] = React.useState<number>(0);
  const [sec, setSec] = React.useState<number>(0);
  const makeTimeForm = (time: number) => {
    if (time < 60) {
      setMin(0);
      setSec(time);
    } else {
      let min = Math.floor(time / 60);
      let sec = time - min * 60;
      setSec(sec);
      setMin(min);
    }
  };
  React.useEffect(() => {
    makeTimeForm(time);
  }, [time]);

  return (
    <div>
      <span className="time">{min}</span>
      <span className="unit">min</span>
      <span className="time right">{sec}</span>
      <span className="unit">sec</span>
    </div>
  );
}

//
//
//
//
const StopwatchComp: React.FC<TimeState> = ({ time, stopwatch }) => {
  const [times, setTime] = React.useState<number>(time);
  const [stopwatchs, setStopwatch] = React.useState(stopwatch);

  const start = (t: number) => {
    clearInterval(stopwatch);
    let timer: number = window.setInterval(() => {
      setTime(t + 1);
      // let newtime: number = time + 1;
      // time = newtime;
    }, 1000);
    setStopwatch(timer);
    // return ();
  };

  const reset = () => {
    clearInterval(stopwatch);
    time = 0;
    setStopwatch(0);
  };

  return (
    <Container>
      <h5>Time so far:</h5>
      <div className="time-wrapper">
        <StopwatchFunc time={time} />
        <div className="button-wrapper">
          <BeginButton
            time={time}
            title={stopwatch ? 'stop' : 'start'}
            onClick={() => start}
          />
          <BeginButton title="reset" onClick={() => reset} />
        </div>
      </div>
    </Container>
  );
};

export default StopwatchComp;
