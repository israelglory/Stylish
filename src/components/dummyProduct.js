import React from "react";
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { newArrivals } from "../constants/images";
import { primaryColor } from "../constants/colors";

const DummySingleProduct = ({item}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: item.images[0]}} style={styles.img} />
            <View style={styles.columnSide}>
                    <Text  numberOfLines={2} ellipsizeMode='tail' style={styles.text}>{item.title}</Text>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.time}>{item.description}</Text>
            </View>
            <Text style={styles.priceText}>₹{item.price}</Text>
            <View style={styles.row}>
                <Text style={styles.viewAll}>66</Text>
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
        paddingHorizontal: 16,
        marginHorizontal: 8,
        paddingBottom: 16,
        borderRadius: 10,
       
    },
    columnSide: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        marginBottom: 4,
        color: '#000',
        maxWidth: 190,
    },
    time:{
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#000',
        maxWidth: 190,
    },
    viewAll: {
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
    },
    img:{
        width: 170,
        height: 170,
        resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 5,
        marginTop: 10,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
    },
    priceText:{
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: primaryColor,
        paddingTop: 5,
        paddingBottom: 5,
    }

})

export default DummySingleProduct;