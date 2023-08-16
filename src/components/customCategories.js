import React from "react";
import{View,Text,StyleSheet,TouchableOpacity, Image, } from "react-native";

const CustomCategories = ({text, image}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.img} />
            <View style={{height:4}}></View>
            <Text style={styles.text}>{text}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginLeft: 16,
    },
    text:{
        fontSize:13,
        fontFamily: 'Montserrat-Regular',
        color:'#000',
    },
    img:{
        width: 56,
        height: 56,
        borderRadius: 100,
        resizeMode: 'contain',
    },
})

export default CustomCategories;