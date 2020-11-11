import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';

import styles from './Editor.module.css';

function Editor() {
  const [html, setHtml] = useState('hello <b>world</b>');

  function handleChange(e: any) {
    const newHtml = e.target.value;
    setHtml(newHtml);
  }

  return (
    <div>
      editor component:
      <ContentEditable
        className={styles.editable}
        html={html}
        disabled={false}
        onChange={handleChange}
      />
    </div>
  );
}

export default Editor;
