import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const PaymentMethod = ({image, selected}) => {
    return (
        <View style={[styles.container, selected && styles.active]}>
            {/* <Image source={image} style={styles.img} /> */}
            {<Text style={styles.fadedNumber}>2109</Text> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingHorizontal:17,
        paddingVertical:15,
        borderRadius: 8,
        backgroundColor: '#F4F4F4',
        borderWidth:1,
        borderColor:'#F8F8F8',
    },
    active:{
        borderColor:'#F83758',
    },
    img:{
        height:20,
        resizeMode:'contain',
    },
    fadedNumber:{
        color:'#6E7179',
        fontSize:16,
        fontFamily:'Montserrat-SemiBold',
    }
});

export default PaymentMethod;