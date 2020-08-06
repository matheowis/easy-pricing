import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import DropBox from './DropBox';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IStore } from '../store';
import { UserComponent } from '../interfaces/IUserComponent';
import UserComp from './UserComp';

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

interface IMainContainer {
  dispatch: Dispatch
  userComponents: UserComponent[]
}

const mapToState = ({ userComponents }: IStore) => ({ userComponents })

const MainContainer = connect(mapToState)((props: IMainContainer) => {
  const classes = useStyles();
  return (
    <div className={classes.containerRoot}>
      <div className={classes.container}>
        {props.userComponents.map((userComponent,i) => (
          <UserComp key={`userComponent_${i}`} userComponent={userComponent} />
        ))}
        <DropBox height={100} index={props.userComponents.length} />
      </div>
    </div>
  )
})

export default MainContainer