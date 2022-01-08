import React from 'react';
import ReactDOM from 'react-dom';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Container } from 'react-bootstrap';

const CodeEditor = () => {
  return (
    <Container>
      <h1>Code Editor</h1>

      {/* <CodeMirror
        value={js}
        options={{
          mode: 'javascript',
          ...codeMirrorOptions,
        }}
        onBeforeChange={(editor, data, js) => {
          this.setState({ js });
        }}
      /> */}
    </Container>
  );
};

export default CodeEditor;

// function makePair<P extends number | string, T extends string | P>() {
//     let pair: { first: P, sec: T }

//     function setPair(x: P, y: T) {
//         pair = {
//             first: x,
//             sec: y
//         }
//     }
//     return { setPair }
// }

// const { setPair } = makePair<number, string>()
// setPair(1, 'hi')
