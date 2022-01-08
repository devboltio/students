import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// TODO: coding problems API.

type Props = {
  questDescr: string;
  questExs: string[]; //array of strings
  questTitle: string;
  userAns: []; //this will be the algorithm. Not sure about type
  //   questcallback: any; //not sure if need
  questNr: number;
};

const ChallengeDescription: React.FC<Props> = ({
  questDescr,
  questExs,
  questTitle,
  userAns,
  //   questcallback, //need?
  questNr,
}) => (
  <Container>
    <p>
      Question: {questNr}. {questTitle}
    </p>
    <p dangerouslySetInnerHTML={{ __html: questDescr }} />
    <div>
      <Row>
        {questExs.map((ex) => {
          <p>{ex}</p>;
        })}
      </Row>
      ;
    </div>
  </Container>
);

export default ChallengeDescription;
