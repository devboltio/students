import React, { useState } from 'react';
import './App.css';
import { Button, Row } from 'react-bootstrap';
import ChallengeDescription from './components/ChallDescription';
import CodeEditor from './components/CodeEditor';
import Submit from './components/Submit';
import Stopwatch from './components/Stopwatch';
// import { fetchQuestions } from './API';

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

function App() {
  const [loading, setLoading] = useState(false);
  const [challComplete, setChallComplete] = useState(false);
  const [start, setStart] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const startCodingEnviro = async () => {
    setLoading(true);
    setChallComplete(false);

    // const newQuestion = await fetchQuestions(
    //   language,
    //   Difficulty.EASY
    // )
  };

  return (
    <div className="App">
      <h1>Code Challenge</h1>

      <Row>
        <Button onClick={() => startCodingEnviro()}>Begin!</Button>
        <Stopwatch start={start} />
      </Row>
      <ChallengeDescription
        questNr={hardCodedNr}
        questDescr={hardCodedDescription}
        questTitle={hardCodedTitle}
        questExs={hardCodedExamples}
        // check ans function here? I could pass it as a props... like Submit component
      />
      <CodeEditor />
      {/* <Submit /> */}
    </div>
  );
}

export default App;

// ctrl shift p, format doc with... maybe need to make default typescript instead of prettier
// alt shift o removes unnecc imports
