import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// TODO: coding problems API.

interface QuestionProps {
  questDescr: string;
  questExs: string[]; //array of strings
  questTitle: string;
  //   questcallback: any; //not sure if need
  questNr: number;
}

const ChallengeDescription: React.FC<QuestionProps> = ({
  questDescr,
  questExs,
  questTitle,
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
        <Col>
          {questExs.map((ex) => (
            <p>{ex}</p>
          ))}
        </Col>
      </Row>
    </div>
  </Container>
);

export default ChallengeDescription;
