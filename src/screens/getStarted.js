import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { spBackgound, globe } from '../constants/images';
import { primaryColor } from '../constants/colors';

const  GetStarted = ({navigation}) => {


  const goToHome = () => {
    navigation.navigate('Intro');
  }

    return (
          <View style = {styles.sectionContainer}>
            <ImageBackground source={spBackgound} style={styles.image}>
            
              <Text style = {styles.title}>
                You want Authentic, here you go!
              </Text>

              <Text style = {styles.subTitle}>
                You want Authentic, here you go!
              </Text>

              <TouchableOpacity style = {styles.btn} onPress={() => goToHome()}>
                    <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>

            </ImageBackground>
            
          </View>
    );
}
//require('../assets/images/logo.png')

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        margin:0,
    },
    //Make the image full the screen and fit it
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        //resizeMode: 'contain'
        justifyContent: 'flex-end'
    },
    title: {
        color: "white",
        fontSize: 48,
        textAlign: 'center',
        paddingHorizontal: 37,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 14,
    },
    subTitle: {
        color: "white",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        paddingHorizontal: 37,
        marginBottom: 44,
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      //width: "100%",
      paddingVertical: 24,
      //height: 60,
      borderRadius: 10,
      marginHorizontal: 24,
      backgroundColor: primaryColor,
      marginBottom: 24,
    },
    btnText: {
      fontSize: 23,
      lineHeight: 21,
      letterSpacing: 0.25,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Montserrat-Bold',
    },
  });
  
  export default GetStarted;
  