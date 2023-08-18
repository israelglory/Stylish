import React from "react";
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { newArrivals } from "../constants/images";

const NewArrivalBanner = () => {
    return (
        <View style={styles.container}>
            <Image source={newArrivals} style={styles.img} />
            <View style={styles.row}>
                <View style={styles.columnSide}>
                    <Text style={styles.text}>New Arrivals</Text>
                    <Text style={styles.time}>Summer’ 25 Collections</Text>
                </View>
                
                <Text style={styles.viewAll}>View all <Icon name='arrow-right' size={16} color='#fff' /></Text>
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
        marginBottom: 8,
        color: '#000',
    },
    time:{
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
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
        resizeMode: 'stretch',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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

export default NewArrivalBanner;