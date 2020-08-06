import { Action } from 'redux';
import { UserComponent } from '../interfaces/IUserComponent';
import { TUserComponents } from '../constants/reduxTypes/TUserComponents';

interface AUserComponents extends Action {
  userComponents?: UserComponent[]
  userComponent?: UserComponent
}

export const userComponents = (state = [] as UserComponent[], action: AUserComponents): UserComponent[] => {
  switch (action.type) {
    case TUserComponents.SET:
      if (action.userComponents === undefined)
        throw ('Error in RUserComponents \naction.userComponents is undefined');
      return action.userComponents;
    default:
      return state
  }
}