import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import { getSrcFromFile } from '../utils';

const iniBorderColor = `${grey[900]}66`;

const useStyles = makeStyles(theme => ({
  dropBox: {
    border: 'solid',
    width: '100%',
    boxSizing: 'border-box',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: iniBorderColor,
    transition: 'opacity 0.5s, border-color 0.5s',
  }
}))

interface IDropBox {
  height?: number
}

const defaultProps: IDropBox = {
  height: 100
}

const DropBox = (props = defaultProps) => {
  const classes = useStyles();
  const rootRef = React.createRef<HTMLDivElement>();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!e.dataTransfer.items[0] || e.dataTransfer.items[0].type !== 'image/png') {
      alert('Please use png format');
    } else {
      const file = e.dataTransfer.items[0].getAsFile()
      if (!file)
        return;
      getSrcFromFile(file).then(imgSrc => {
        console.log({imgSrc})
        // add component
      })
    }
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (el) {
      el.style.opacity = '0.8';
      el.style.borderColor = blue[500]
    }
    e.preventDefault();
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (el) {
      el.style.opacity = '1';
      el.style.borderColor = iniBorderColor;
    }
  }

  return (
    <div
      className={classes.dropBox}
      style={{ height: props.height }}
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      ref={rootRef}
    >
      Test
    </div >
  )
}

export default DropBox;