import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import MainContainer from '../components/MainContainer';

const useStyles = makeStyles(theme => ({
  mainPage: {
    display: 'flex'
  },
  margin: {
    flex: 1
  }
}));

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainPage} onDragOver={e => e.preventDefault()} onDrop={e => e.preventDefault()}>
      <div className={classes.margin} />
      <MainContainer />
      <div className={classes.margin} />
    </div>
  )
}

export default MainPage