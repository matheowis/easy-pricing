import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {userComponents} from '../reducers/RUserComponents'
import { UserComponent } from '../interfaces/IUserComponent';
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  // console.log("Action type:", action.type);
  // console.log("Action payload:", action.payload);
  // console.log("Action raw:", action);
  // console.log("State before:", store.getState());
  next(action);
  console.log("State after:", store.getState());
};

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(loggerMiddleware)
)(createStore);

export interface IStore {
  userComponents:UserComponent[]
}

export const store = createStoreWithMiddleware(
  combineReducers({
    userComponents
  }),
  initialState
)

