import React, { useState } from 'react';
import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ChallengeDescription from './components/ChallDescription';
import CodeEditor from './components/CodeEditor';
// import Submit from './components/Submit';
// import StopwatchComp from './components/Stopwatch';
import Stopwatch from './components/Stopwatch';
// import { fetchQuestions } from './API';
import { useStopwatch } from 'react-timer-hook';
import Feedback from './components/Feedback';

// types
// import { Difficulty, QuestionState } from './API'; //for fetching questions from a coding question api
// type UserAnswerObject = {
//   question: string;
//   answer: string; //this will be the algorithm they made
//   timeToComplete: number;
//   correct: boolean;
//   languageUsed: string;
//   correctAnswer: string;
// };

const hardCodedDescription =
  "The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'. For example, 'ACGAATTCCG' is a DNA sequence. When studying DNA, it is useful to identify repeated sequences within the DNA. Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.";
const hardCodedTitle = 'Repeated DNA Sequences';

const hardCodedExamples = [
  'Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", Output: ["AAAAACCCCC","CCCCCAAAAA"]',
  'Input: s = "AAAAAAAAAAAAA", Output: ["AAAAAAAAAA"]',
];
const hardCodedNr = 0;

interface TimeState {
  //i think this was for the stopwatchComp
  time: number;
  stopwatch: number | undefined;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [challComplete, setChallComplete] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  // const [start, setStart] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const startCodingEnviro = async () => {
    setLoading(true);
    setChallComplete(false);
    setVisible(true);
    // startClock();
    // const newQuestion = await fetchQuestions(
    //   language,
    //   Difficulty.EASY
    // )
  };

  return (
    <Container className="App" fluid>
      <Row>
        <Col className="appHeader">
          <h1>Code Challenge</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => startCodingEnviro()}>Begin!</Button>
        </Col>
      </Row>
      <Row>
        {visible ? (
          <ChallengeDescription
            questNr={hardCodedNr}
            questDescr={hardCodedDescription}
            questTitle={hardCodedTitle}
            questExs={hardCodedExamples}
            // check ans function here? I could pass it as a props... like Submit component
          />
        ) : null}
      </Row>
      <Row>
        <CodeEditor />
      </Row>
      <Row>
        {challComplete && loading ? (
          <p>Loading your score...</p>
        ) : challComplete && !loading ? (
          <Feedback /> //will have to trigger not loading when score completed
        ) : null}
      </Row>
      <Row className="stickyBtm bg-transparent">
        <Col>
          <Stopwatch onClick={start} />
          {/* onClick needs to be removed or altered */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

// ctrl shift p, format doc with... maybe need to make default typescript instead of prettier
// alt shift o removes unnecc imports
