import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';


const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
      </Stack.Navigator>
  );
}
export default HomeStack;