import { useState } from 'react';
// import { useCodeMirror } from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import '../codeMirrorDracula.css';
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
import { Container } from 'react-bootstrap';

const code = "console.log('hello world!');";

const CodeEditor = () => {
  const [code, setCode] = useState('');

  return (
    <Container>
      <CodeMirror
        value={code}
        // options={{
        //   theme: 'dracula',
        //   keyMap: 'sublime',
        //   mode: 'jsx',
        // }}
      />
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
