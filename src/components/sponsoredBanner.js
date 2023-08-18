import React from "react";
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {  sponsored } from "../constants/images";

const SponsoredBanner = () => {
    return (
        <View style={styles.container}>
             <Text style={styles.text}>Sponsored</Text>
            <Image source={sponsored} style={styles.img} />
            <View style={styles.row}>
                <View style={styles.columnSide}>
                    <Text style={styles.deal}>up to 50% Off</Text>
                </View>
                <Icon name='arrow-right' size={16} color='#000' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        // paddingVertical: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 10,
    },
    columnSide: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        color: '#000',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    deal:{
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#000',
    },
    viewAll: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#F83758',
        borderRadius: 5,
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
    },
    img:{
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        width: '100%',
    }

})

export default SponsoredBanner;