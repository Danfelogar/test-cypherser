import {Dimensions, Platform} from 'react-native';

import { UserData, UserFront } from '../types/userData';

export const {width: widthFullScreen, height: heightFullScreen} = Dimensions.get('screen');

export const isIOS = (): boolean => {
  return Platform.OS === 'ios' ? true : false;
};

export const transformUserDataToUserFront = (userDataArray: UserData[]): UserFront[] => {
  return userDataArray.map((user: UserData) => ({
    id: user.id,
    name: user.nombre,
    age: user.edad,
  }));
};