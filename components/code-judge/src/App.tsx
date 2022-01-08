import React, { useState } from 'react';
import './App.css';
import ChallengeDescription from './components/ChallDescription';
import CodeEditor from './components/CodeEditor';
import Submit from './components/Submit';

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
  const [questDescr, setQuestDescr] = useState(hardCodedDescription);
  const [questExs, setQuestExs] = useState(hardCodedExamples);
  const [questTitle, setQuestTitle] = useState(hardCodedTitle);
  const [questNr, setQuestNr] = useState(hardCodedNr);
  const [challComplete, setChallComplete] = useState(false);

  return (
    <div className="App">
      <h1>Code Challenge</h1>
      <ChallengeDescription
        questNr={questNr}
        questDescr={questDescr}
        questTitle={questTitle}
        questExs={questExs}
        // check ans function here? I could pass it as a props... like Submit component
      />
      <CodeEditor />
      <Submit />
    </div>
  );
}

export default App;

// ctrl shift p, format doc with... maybe need to make default typescript instead of prettier
// alt shift o removes unnecc imports
