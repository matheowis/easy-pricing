import * as React from 'react';
import { UserComponent } from '../interfaces/IUserComponent';

interface IUserComp {
  // dispatch: Dispatch
  userComponent: UserComponent
  // onChange: (userComponent:UserComponent) => any
}


const UserCompText = (props: IUserComp) => {

  return (
    <div>
      BUU
    </div>
  )
}

const UserCompImage = ({ userComponent }: IUserComp) => {
  return (
    <div>
      <img
        src={userComponent.src}
        style={{ width: `${userComponent.width}%` }}
      // width={50} 
      // height={50}
      />
    </div>
  )
}

const UserComp = (props: IUserComp) => {
  if (props.userComponent.type === 'img')
    return <UserCompImage {...props} />
  return <UserCompText {...props} />
}

export default UserComp;