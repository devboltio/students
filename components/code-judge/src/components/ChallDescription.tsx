import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface QuestionProps {
  questDescr: string;
  questExs: string[];
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
  <Container className="questionDescription header">
    <Row>
      <Col>
        <h5>
          {questNr}. {questTitle}
        </h5>
      </Col>
    </Row>
    <Row>
      <Col>
        <p dangerouslySetInnerHTML={{ __html: questDescr }} />
      </Col>
    </Row>
    <Row>
      <Col>
        {questExs.map((ex) => (
          <p>{ex}</p>
        ))}
      </Col>
    </Row>
  </Container>
);

export default ChallengeDescription;
