import { useState } from 'react';
// import { useCodeMirror } from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import '../codeMirrorDracula.css';
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
import { Container, Row, Button, Col } from 'react-bootstrap';
import CSS from 'csstype';

interface UserAnswer {
  //not sure where I want this??
  question: string;
  answer: string;
  timeToComplete: number;
  correct: boolean;
  languageUsed: string;
  correctAnswer: string;
}

const CodeEditor = () => {
  const [code, setCode] = useState<string>('');
  const [userAns, setUserAns] = useState<UserAnswer[]>([]);

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(e);
  }; //should trigger a loading component, spinner maybe.

  return (
    <Container>
      <Row>
        <CodeMirror
          value={code}
          onChange={() => setCode(code)}
          // options={{
          //   theme: 'dracula',
          //   keyMap: 'sublime',
          //   mode: 'jsx',
          // }}
        />
      </Row>

      <Row>
        <Col>
          <Button variant="success" type="submit" onClick={(e) => submit(e)}>
            Submit
          </Button>
        </Col>
      </Row>
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
