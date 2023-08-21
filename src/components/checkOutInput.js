import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import { primaryColor } from '../constants/colors';
import {search, email} from '../constants/images';

const CheckOutImput = ({hint,  onChange}) => {
    return (
        <View style = {{marginBottom:36}}>
            <View style={styles.inputBox}>
                <TextInput placeholder={hint} placeholderTextColor="grey" style={styles.textInput} onChangeText={()=>onChange()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C8C8C8',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        
        fontFamily: 'Montserrat-SemiBold',
        marginHorizontal:20,
    },
    textInput: {
        marginLeft: 10, 
        flex: 1,
        color: "black",
        fontSize: 16,
        fontFamily:  'Montserrat-SemiBold',
    },
});

export default CheckOutImput;