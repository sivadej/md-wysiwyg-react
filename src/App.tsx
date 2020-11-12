import React from 'react';
import Editor from './Editor';

function App() {
  const handleSend = (md: string): void => {
    console.log(`Received markdown: "${md}"`);
  };
  return <Editor onSend={handleSend} />;
}

export default App;
