// import * as React from 'react';
// import { Container } from 'react-bootstrap';
// import BeginButton from './BeginButton';

// type StopwatchProps = {
//   time: number;
// };

// interface TimeState {
//   time: number;
//   stopwatch: number;
// }

// function StopwatchFunc({ time }: StopwatchProps) {
//   const [min, setMin] = React.useState<number>(0);
//   const [sec, setSec] = React.useState<number>(0);
//   const makeTimeForm = (time: number) => {
//     if (time < 60) {
//       setMin(0);
//       setSec(time);
//     } else {
//       let min = Math.floor(time / 60);
//       let sec = time - min * 60;
//       setSec(sec);
//       setMin(min);
//     }
//   };
//   React.useEffect(() => {
//     makeTimeForm(time);
//   }, [time]);

//   return (
//     <div>
//       <span className="time">{min}</span>
//       <span className="unit">min</span>
//       <span className="time right">{sec}</span>
//       <span className="unit">sec</span>
//     </div>
//   );
// }

// //
// //
// //
// //
// const StopwatchComp: React.FC<TimeState> = ({ time, stopwatch }) => {
//   const [times, setTime] = React.useState<number>(time);
//   const [stopwatchs, setStopwatch] = React.useState(stopwatch);

//   const start = (time: number): void => {
//     clearInterval(stopwatch);
//     let timer: number = window.setInterval(() => {
//       setTime(time + 1);
//       // let newtime: number = time + 1;
//       // time = newtime;
//     }, 1000);
//     setStopwatch(timer);
//     setTime(time);
//   };

//   const reset = () => {
//     clearInterval(stopwatch);
//     time = 0;
//     setStopwatch(0);
//   };

//   return (
//     <Container>
//       <h5>Time so far:</h5>
//       <div className="time-wrapper">
//         <StopwatchFunc time={time} />
//         <div className="button-wrapper">
//           <BeginButton
//             time={time}
//             title={stopwatch ? 'stop' : 'start'}
//             onClick={start}
//           />
//           <BeginButton title="reset" onClick={reset} />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default StopwatchComp;

import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { useIdleTimer } from 'react-idle-timer'
import { useStopwatch } from 'react-timer-hook';

const Stopwatch = () => {
  //   const handleOnIdle = event => {
  //     console.log('user is idle', event)
  //     console.log('last active', getLastActiveTime())
  //   }

  //   const handleOnActive = event => {
  //     console.log('user is active', event)
  //     console.log('time remaining', getRemainingTime())
  //   }

  //   const handleOnAction = event => {
  //     console.log('user did something', event)
  //   }

  //   const { getRemainingTime, getLastActiveTime } = useIdleTimer({
  //     timeout: 1000 * 60 * 15,
  //     onIdle: handleOnIdle,
  //     onActive: handleOnActive,
  //     onAction: handleOnAction,
  //     debounce: 500
  // })
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      {/* <button onClick={reset}>Reset</button> */}
    </div>
  );
};

export default Stopwatch;
