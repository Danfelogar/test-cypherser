import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';

import {
  changeThemeDarkMode,
  changeThemeLightMode,
} from '../redux/slices/settings';
import { useAppDispatch} from '../redux/store';
import {RootStackMainParams} from '../types/RootStackMainParams';

import {PrivateNavigation, PublicNavigation} from '.';

const Stack = createNativeStackNavigator<RootStackMainParams>();

export const MainNavigation = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  console.log({isDarkMode});
  useEffect(() => {
    if (isDarkMode) {
      dispatch(changeThemeDarkMode());
    } else {
      dispatch(changeThemeLightMode());
    }
  }, []);

  // if (isLogin === null) {
  //   return <></>;
  // }
  return (
    <Stack.Navigator
      // initialRouteName="PublicNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      {/* {isLogin === TypeStateAuth.Login ? (
        <>
          <Stack.Screen
            name="PrivateNavigation"
            component={PrivateNavigation}
          />
        </>
      ) : (
        isLogin === TypeStateAuth.Logout && (
          <Stack.Screen name="PublicNavigation" component={PublicNavigation} />
        )
      )} */}

      <Stack.Screen name="PublicNavigation" component={PublicNavigation} />
      <Stack.Screen
        name="PrivateNavigation"
        component={PrivateNavigation}
      />
    </Stack.Navigator>
  );
};