import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import '../codeMirrorDracula.css';
// import { javascript } from '@codemirror/lang-javascript';
import { Container, Row, Button, Col } from 'react-bootstrap';
// import CSS from 'csstype';

// interface UserAnswer {
//   //not sure where I want this??
//   question: string;
//   answer: string;
//   timeToComplete: number;
//   correct: boolean;
//   languageUsed: string;
//   correctAnswer: string;
//   // if i do decide I want to use this, refer to min 51 for how to save the ans in here
// }

const CodeEditor = () => {
  const [code, setCode] = useState('a = 0');
  //<string>('');
  const [userAns, setUserAns] = useState(''); //<UserAnswer[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const submit = () => {
    console.log(code);
    setSubmitted(true);
    //e: React.MouseEvent<HTMLButtonElement>
    // setUserAns(e.currentTarget.value);
    // starts tests, not sure how to embed these
  };

  return (
    <Container className="header">
      <Row className="codeEditor">
        <CodeMirror
          value={code}
          options={{
            theme: 'dracula',
            keyMap: 'sublime',
            mode: 'python',
          }}
          // height={height()}
          onChange={(editor, change) => {
            setCode(editor);
          }}
        />
      </Row>

      <Row>
        <Col>
          <Button
            variant="success"
            type="submit"
            onClick={(e) => submit(e)}
            className="header"
          >
            Submit
          </Button>
        </Col>
      </Row>
      {submitted ? (
        <Row>
          <p>You have submitted your answer</p>
        </Row>
      ) : null}
    </Container>
  );

  // const editor = useRef();
  // const { setContainer } = useCodeMirror({
  //   container: editor.current,
  //   extensions: [javascript()],
  //   value: code,
  // });

  // useEffect(() => {
  //   if (editor.current) {
  //     setContainer(editor.current);
  //   }
  // }, [editor.current]);

  // return <div ref={editor} />;
  // return (
  //   <Container>
  //     <h1>Code Editor</h1>

  //     <CodeMirror
  //       value="console.log('hello world!');"
  //       height="200px"
  //       extensions={[javascript({ jsx: true })]}
  //       onChange={(value, viewUpdate) => {
  //         console.log('value:', value);
  //       }}
  //     />
  //   </Container>
  // );
};

export default CodeEditor;
