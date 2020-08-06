import * as React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import { getSrcFromFile } from '../utils';
import { Dispatch } from 'redux';
import { IStore } from '../store';
import { ASetUserComponents } from '../actions/AUserComponents';
import { UserComponent } from '../interfaces/IUserComponent';

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
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& #DropText': {
      fontSize: 36,
      textAlign: 'center',
      opacity: 0,
      transition: 'opacity 0.5s',
    },
    '&:hover': {
      borderColor: '#ffffff00',
      '& #DropText': {
        opacity: 1
      }
    }
  }
}))
const mapToState = ({ userComponents }: IStore) => ({ userComponents })

interface IDropBox {
  dispatch: Dispatch
  height: number
  userComponents: UserComponent[]
  index: number
}

const DropBox = connect(mapToState)((props: IDropBox) => {
  const classes = useStyles();
  const rootRef = React.createRef<HTMLDivElement>();
  const isFileRef = React.useRef<boolean>(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // isFileRef.current = false;
    if (!e.dataTransfer.items[0] || e.dataTransfer.items[0].type !== 'image/png') {
      alert('Please use png format');
    } else {
      const file = e.dataTransfer.items[0].getAsFile()
      if (!file)
        return;
      getSrcFromFile(file).then(imgSrc => {
        const holder = [...props.userComponents];
        const exists = !!props.userComponents[props.index];

        if (exists) {
          holder[props.index].type = 'img';
          holder[props.index].src = imgSrc;
        } else {
          holder.splice(props.index, 0, new UserComponent({ type: 'img', src: imgSrc }));
        }

        props.dispatch(ASetUserComponents(holder));
      })
    }
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    isFileRef.current = true;
    if (el) {
      el.style.opacity = '0.8';
      el.style.borderColor = blue[500]
    }
    e.preventDefault();
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    isFileRef.current = false;
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
      <div id='DropText'>Add Text</div>
    </div>
  )
})

export default DropBox;