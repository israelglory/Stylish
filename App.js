import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SplashScreen from "./src/screens/splashScreen";
import IntroScreen from "./src/screens/introScreen";
import GetStarted from "./src/screens/getStarted";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/home";
import LoginScreen from "./src/screens/loginScreen";
import SignUpScreen from "./src/screens/signUp";
import TabStack from "./src/stacks/tabStack";
import ProductDetail from "./src/screens/productDetails";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{ headerShown: false }}
            />

          <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TabStack" component={TabStack} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "tomato",
    },
});

export default App;

