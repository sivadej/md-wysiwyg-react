import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import snarkdown from 'snarkdown';
import * as HtmlToMd from 'html-to-markdown';
import EditButton from './EditButton';
import styles from './Editor.module.css';

interface EditorProps {
  editableOnLoad?: boolean;
  text?: string;
  isPlainText?: boolean;
  onSend: (md: string) => void;
}

function Editor(props: EditorProps): JSX.Element {
  const {
    editableOnLoad = true,
    text = '',
    // isPlainText = false,
    onSend,
  } = props;
  const [html, setHtml] = useState(snarkdown(text));
  const [editable, setEditable] = useState(editableOnLoad);

  function handleChange(e: any) {
    const newHtml = snarkdown(e.target.value);
    setHtml(newHtml);
  }

  function getMarkdown(submittedHtml: string): void {
    const newMarkdown = HtmlToMd.convert(submittedHtml);
    onSend(newMarkdown);
  }

  return (
    <div>
      <div>markdown state from parent: {text}</div>
      <hr />
      Editable Component:
      <ContentEditable
        tagName='div'
        className={editable ? styles.editable : styles.editableOff}
        html={html}
        disabled={!editable}
        onChange={handleChange}
      />
      HTML State:
      <pre className={styles.htmlPreview}>{html}</pre>
      <div>actions</div>
      <EditButton cmd='bold' name='B' />
      <EditButton cmd='italic' name='i' />
      <hr />
      <button onClick={() => getMarkdown(html)}>submit changes</button>
      <br />
      <button onClick={() => setEditable((curr) => !curr)}>
        editor {editable ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Editor;
