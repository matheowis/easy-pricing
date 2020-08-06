import { TUserComponents } from '../constants/reduxTypes/TUserComponents';
import { UserComponent } from '../interfaces/IUserComponent';

export const ASetUserComponents = (userComponents: UserComponent[]) => ({
  type: TUserComponents.SET,
  userComponents
});

// export const APutUserComponents = (userComponents: UserComponent, index: number) => ({
//   type: TUserComponents.SET,
//   userComponents,
//   index
// });

// export const AAddUserComponents = (userComponents: UserComponent) => ({
//   type: TUserComponents.SET,
//   userComponents
// });

// export const ADeleteUserComponents = (index: number) => ({
//   type: TUserComponents.SET,
//   index
// });

