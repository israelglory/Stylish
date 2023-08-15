import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryColor } from '../constants/colors';

import HomeStack from './homeStack';
import WishlistScreen from '../screens/wishlist';
import CartScreen from '../screens/cart';
import SearchScreen from '../screens/search';
import SettingsScreen from '../screens/settings';

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: {
           paddingTop: 10,
           paddingBottom: 10,
           height: 60,
          },
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'web'
                : 'web';
            } else if (route.name === 'WishlistStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }else if (route.name === 'CartStack') {
              iconName = focused
                ? 'heart'
                : 'heart-outline';
            }else if (route.name === 'SearchStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }else if (route.name === 'AccountStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',

            headerShown: false,

          }}  />
        <Tab.Screen
          name="WishlistStack"
          component={WishlistScreen}
          options={{
            tabBarLabel: 'Wishlist',
            headerShown: false
          }} />
          <Tab.Screen
          name="CartStack"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            headerShown: false
          }} />
          <Tab.Screen
          name="SearchStack"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            headerShown: false
          }} />
          <Tab.Screen
          name="AccountStack"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            title: 'Settings',
            headerShown: false
          }} />
      </Tab.Navigator>
  );
}
export default TabStack;