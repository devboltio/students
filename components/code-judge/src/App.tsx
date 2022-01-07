import React from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';
import Submit from './components/Submit';

function App() {
  return (
    <div className="App">
      <h1>Code Challenge</h1>
      <CodeEditor />
      <Submit />
    </div>
  );
}

export default App;

// ctrl shift p, format doc with... maybe need to make default typescript instead of prettier
// alt shift o removes unnecc imports
