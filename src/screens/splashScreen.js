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
     navigation.navigate('GetStarted');
    }, 2000);

    // Clear the timeout when the component unmounts to avoid potential issues
    return () => clearTimeout(timeout);
  }, [navigation]);
    
    return (
          <View style = {styles.sectionContainer}>
            <Image source={require('../assets/images/logo.png')} style={{width: '85%',  resizeMode:'contain',}} />
          </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  
  export default SplashScreen;
  