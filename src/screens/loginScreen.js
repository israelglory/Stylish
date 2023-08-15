import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { primaryColor } from '../constants/colors';
import {apple,facebook, google, pass, email } from '../constants/images';
import CustomInput from "../components/customInput";
import LoginOption from "../components/loginSignUpOption";

const LoginScreen = ({navigation}) => {

    const goToHome = () => {
        navigation.navigate('TabStack');
    }

    return (
        <View style = {styles.sectionContainer}>
            <Text style = {styles.title}>Welcome</Text>
            <Text style = {{paddingBottom:32, ...styles.title}}>Back!</Text>

            <CustomInput title="Email" hint="Username or Email" icon={email}/>
            <CustomInput title="Password" hint="Enter your password" icon={pass}/>

            <Text style = {styles.forgetPassword}>Forgot Password?</Text>
            
            <TouchableOpacity style = {styles.btn} onPress={() => goToHome()}>
                    <Text style={styles.btnText}>LOG IN</Text>
            </TouchableOpacity>

            <Text style = {styles.continueWith}>- OR Continue with -</Text>
            <View style = {styles.optionView}>
                <LoginOption icon={google} />
                <LoginOption icon={apple} />
                <LoginOption icon={facebook} />
            </View>

            <View style={styles.doesntHaveAccount}>
                <Text style={styles.doesntHaveAccountText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 32,
        marginBottom: 20,
        paddingTop: 63,
    },
    logoImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 36,
        color: 'black',
        fontFamily: 'Montserrat-Bold',
    },

    forgetPassword: {
        color: primaryColor, 
        textAlign: 'right', 
        fontSize: 16, 
        marginBottom: 20,
        fontFamily: 'Montserrat-Regular',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: 60,
        borderRadius: 10,
        backgroundColor: primaryColor,
      },
      optionView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
    },
      btnText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
      },
      doesntHaveAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    signUpText: {
        fontSize: 18,
        color: primaryColor,
        fontFamily: 'Montserrat-SemiBold',
        textDecorationLine : 'underline',
    },
    doesntHaveAccountText: {
        fontSize: 18,
        color: "grey",
        fontFamily: 'Montserrat-Medium',
    },
    continueWith: {
        textAlign: 'center', 
        marginTop: 45, 
        fontFamily: 'Montserrat-Regular', 
        color:'black',
    },
});

export default LoginScreen;