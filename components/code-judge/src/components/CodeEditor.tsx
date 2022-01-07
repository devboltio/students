import React from 'react';
import ReactDOM from 'react-dom';

const CodeEditor = () => <div>Code Editor</div>;

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
