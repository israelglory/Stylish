import React from "react";
import{View,Text,StyleSheet,TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButon = ({text, icon}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Icon name={icon} size={20} color="#000" />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        paddingHorizontal:8,
        paddingVertical:5,
        elevation: 2,
    },
    text:{
        fontSize:13,
        fontFamily: 'Montserrat-Regular',
        color:'#000',
        marginRight:5,
    }
})

export default CustomButon;