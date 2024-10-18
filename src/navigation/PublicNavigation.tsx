import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from '../screens';
import {RootStackPublicParams} from '../types/RootStackMainParams';

const Stack = createNativeStackNavigator<RootStackPublicParams>();

export const PublicNavigation = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};