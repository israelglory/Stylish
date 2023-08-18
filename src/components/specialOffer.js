import React from "react";
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { offer, exclaim } from "../constants/images";

const SpecialOffer = () => {
    return (
        <View style={styles.container}>
            <Image source={offer} style={styles.img} />
            <View style={styles.columnSide}>
                <Text style={styles.text}>Special Offers <Image source={exclaim} style={styles.exclaim} /> </Text>
                <Text style={styles.desc}>We make sure you get the offer you need at best prices</Text>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16,
        marginHorizontal: 16,
        borderRadius: 10,
        
    },
    img:{
        width: 75,
        height: 60,
        resizeMode: 'contain',
        marginRight: 24,
    },
    exclaim:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 24,
    },
    columnSide: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        marginBottom: 8,
        color: '#000',
    },
    desc:{
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
    },
    viewAll: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
    }

})

export default SpecialOffer;