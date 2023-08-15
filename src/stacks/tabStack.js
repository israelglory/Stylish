import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryColor } from '../constants/colors';
import {View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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
           paddingBottom: 20,
           height: 76,
          },
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
              fontSize: 13,
              fontFamily: 'Montserrat-Medium',
          },
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;
          //   if (route.name === 'HomeStack') {
          //     iconName = focused
          //       ? 'web'
          //       : 'web';
          //   } else if (route.name === 'WishlistStack') {
          //     iconName = focused
          //       ? 'account-settings'
          //       : 'account-settings-outline';
          //   }else if (route.name === 'CartStack') {

          //     iconName = focused
          //       ? 'heart'
          //       : 'heart-outline';
          //   }else if (route.name === 'SearchStack') {
          //     iconName = focused
          //       ? 'account-settings'
          //       : 'account-settings-outline';
          //   }else if (route.name === 'AccountStack') {
          //     iconName = focused
          //       ? 'account-settings'
          //       : 'account-settings-outline';
          //   }
          //   return (
          //     <MaterialCommunityIcons
          //       name={iconName}
          //       size={30}
          //       color={color}
          //     />
          //   );
          // }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
           
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                iconName = focused
                  ? 'home'
                  : 'home';
              return (
                <Icon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            }

          }}  />
        <Tab.Screen
          name="WishlistStack"
          component={WishlistScreen}
          options={{
            tabBarLabel: 'Wishlist',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                iconName = focused
                  ? 'hearto'
                  : 'hearto';
              return (
                <Icon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            }
          }} />
          <Tab.Screen
          name="CartStack"
          component={CartScreen}
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                iconName = focused
                  ? 'heart'
                  : 'heart-outline';
              return (
                <View
                style={{
                  top: Platform.OS === 'ios' ? -10 : -20,
                  width: Platform.OS === 'ios' ? 50 : 60,
                  height: Platform.OS === 'ios' ? 50 : 60,
                  borderRadius: Platform.OS === 'ios' ? 25 : 30,
                  backgroundColor: focused ? primaryColor : '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  elevation: 5,
                }}>
                <Icon
                  name="shoppingcart"
                  size={Platform.OS === 'ios' ? 24 : 30}
                  color={focused ? '#ffff' : '#000'}
                />
              </View>
              );
            }
          }} />
          <Tab.Screen
          name="SearchStack"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                iconName = focused
                  ? 'search1'
                  : 'search1';
              return (
                <Icon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            }
          }} />
          <Tab.Screen
          name="AccountStack"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                iconName = focused
                  ? 'setting'
                  : 'setting';
              return (
                <Icon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            }
          }} />
      </Tab.Navigator>
  );
}
export default TabStack;