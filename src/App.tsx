import React, { useState } from 'react';
import Editor from './Editor';

function App() {
  const [markdown, setMarkdown] = useState('**hello** there, *flyntlok*');
  const handleSend = (md: string): void => {
    console.log(`Received markdown: "${md}"`);
    const newText = md;
    setMarkdown(newText);
  };
  return <Editor onSend={handleSend} text={markdown} />;
}

export default App;
