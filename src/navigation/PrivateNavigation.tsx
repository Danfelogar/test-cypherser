import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens';
import { RootStackPrivateParams } from '../types/RootStackMainParams';

const Stack = createNativeStackNavigator<RootStackPrivateParams>();

export const PrivateNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      {/* <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="FormUser" component={FormUser} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};