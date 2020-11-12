import React from 'react';
import styles from './EditButton.module.css';

interface EditBtnProps {
  cmd: 'bold' | 'italic';
  name?: string;
  faIcon?: string;
}

function EditButton({ cmd, name, faIcon }: EditBtnProps): JSX.Element {
  return (
    <button
      className={styles.btn}
      key={cmd}
      onMouseDown={(e) => {
        e.preventDefault();
        document.execCommand(cmd, false);
      }}>
      {name || faIcon || cmd}
    </button>
  );
}

export default EditButton;
