import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';
import CodeEditor from './components/CodeEditor';

test('renders code challenge', () => {
  render(<App />);
  const linkElement = screen.getByText(/Code Challenge/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the code mirror', () => {
  render(<CodeEditor />);
  const editor = screen.getByText('a = 0');
  expect(editor).toBeInTheDocument();
});

test('should do display confirmation when user clicks submit', () => {
  render(<CodeEditor />);
  const btn = screen.getByRole('button', { name: /submit/i });
  userEvent.click(btn);
  expect(
    screen.getByText('You have submitted your answer')
  ).toBeInTheDocument();
});

// integration test
// test('starts stopwatch when user clicks begin', () => {
//   render(<App />);
//   const btn = screen.getByRole('button', { name: /begin!/i });
//   const timer = screen.getBy
//   expect()
// });

// test('should render some text given to code editor', () => {
//   render(<CodeEditor />);
//   const editorTxt = screen.getByText('a = 0');
//   expect
// });
