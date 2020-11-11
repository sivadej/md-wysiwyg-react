import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import snarkdown from 'snarkdown';
import * as HtmlToMd from 'html-to-markdown';

import styles from './Editor.module.css';

function Editor({
  editableOnLoad = true,
  initialState = '*hello* **flyntlok**',
  isPlainText = false,
  //onSend,
}) {
  const [html, setHtml] = useState(snarkdown(initialState));
  const [editable, setEditable] = useState(editableOnLoad);

  function handleChange(e: any) {
    const newHtml = snarkdown(e.target.value);
    setHtml(newHtml);
  }

  function getMarkdown(submittedHtml: string): void {
    const newMarkdown = HtmlToMd.convert(submittedHtml);
    alert(newMarkdown);
    //onSend(newMarkdown);
  }

  return (
    <div>
      <div>initial markdown: {initialState}</div>
      <hr />
      <div>
        HTML state: <br />
        {html}
      </div>
      <hr />
      editor component:
      <ContentEditable
        tagName='div'
        className={editable ? styles.editable : styles.editableOff}
        html={html}
        disabled={!editable}
        onChange={handleChange}
      />
      <div className={styles.editableOff}>{html}</div>
      <div>actions</div>
      <button onClick={() => setEditable((curr) => !curr)}>
        editor {editable ? 'ON' : 'OFF'}
      </button>
      <button>bold</button>
      <button onClick={() => getMarkdown(html)}>submit markdown</button>
    </div>
  );
}

export default Editor;
