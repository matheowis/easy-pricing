import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import DropBox from './DropBox';

const viewHeight = 90;
const viewWidth = viewHeight * 0.5625;

const useStyles = makeStyles(theme => ({
  containerRoot: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    height: `${viewHeight}vh`,
    width: `${viewWidth}vh`
  }
}))

const MainContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerRoot}>
      <div className={classes.container}>
        <div>abc</div>
        <DropBox height={100}/>
      </div>
    </div>
  )
}

export default MainContainer