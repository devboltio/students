import React from 'react';

// TODO: coding problems API.

const description =
  "The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'. For example, 'ACGAATTCCG' is a DNA sequence. When studying DNA, it is useful to identify repeated sequences within the DNA. Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.";
const title = 'Repeated DNA Sequences';

const examples = {
  ex1: 'Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", Output: ["AAAAACCCCC","CCCCCAAAAA"]',
  ex2: 'Input: s = "AAAAAAAAAAAAA", Output: ["AAAAAAAAAA"]',
};

type Props = {
  questDescr: string;
  questExs: string[]; //array of strings
  questTitle: string;
  userAns: string;
  questcallback: any; //not sure if need
  questNr: number;
};

const ChallengeDescription: React.FC<Props> = ({
  questDescr,
  questExs,
  questTitle,
  userAns,
  questcallback,
  questNr,
}) => (
  <div>
    <p>Question: {questNr}</p>
  </div>
);

export default ChallengeDescription;
