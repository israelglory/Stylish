import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { primaryColor } from '../constants/colors';

const LoginOption = ({icon}) => {
    return (
        <View style={styles.optionContaner}>
                    <Image source={icon} style={styles.optionImg}/>
        </View>
    )
}

const styles = StyleSheet.create({
    optionContaner:{
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor:'#FCF3F6',
        marginHorizontal: 10,
    },
    optionImg: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default LoginOption;
