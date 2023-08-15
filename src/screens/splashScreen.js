import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Image
} from 'react-native';
//import { logo } from '../constants/images';
import { primaryColor } from '../constants/colors';

const  SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.navigate('Intro');
        }, 2000);
    
        // Clear the timeout when the component unmounts to avoid potential issues
        return () => clearTimeout(timeout);
      }, [navigation]);
    return (
          <View style = {styles.sectionContainer}>
            <Image source={require('../assets/images/logo.png')} style={{width: 200, height: 200}} />
          </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: primaryColor,
        flex: 1,
    },
  });
  
  export default SplashScreen;
  