import React,{useState, useEffect} from "react";
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { newArrivals } from "../constants/images";
import { primaryColor } from "../constants/colors";
import Rating from "../components/rating";


const SingleProduct = ({item}) => {

    return (
        <View style={styles.container}>
            <Image source={{uri: item.image}} style={styles.img} />
            <View style={styles.columnSide}>
                    <Text  numberOfLines={2} ellipsizeMode='tail' style={styles.text}>{item.title}</Text>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.time}>{item.description}</Text>
            </View>
            <Text style={styles.priceText}>₹{item.price}</Text>
            <View style={styles.row}>
                        <Rating rating={item.rating.rate} />
                        <Text style={styles.viewAll}>{item.rating.count} Ratings</Text>
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
        flexGrow: 1,
        marginVertical: 8,
       
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
        marginLeft: 8, 
        fontSize: 16, 
        fontFamily: 'Montserrat-Regular', 
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
        //justifyContent: 'space-between',
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

export default SingleProduct;