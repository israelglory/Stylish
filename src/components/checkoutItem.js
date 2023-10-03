import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,

} from 'react-native';
//import Rating from "../components/rating";

import { primaryColor } from '../constants/colors';
import {search, email} from '../constants/images';
import Rating from "./rating";

const CheckOutItem = ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{uri:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}} style={styles.image} />

                <View style={{flexGrow: 1}}>
                    <Text style={styles.title}>Women’s Casual Wear</Text>

                    <View style={{height:8}}></View>

                    <View style={styles.row}>
                        <Text style={styles.variationTitile}>Variations : </Text>
                        <View style={styles.variationBox}>
                            <Text style={styles.variationText}>Black</Text>
                        </View>
                        <View style={styles.variationBox}>
                            <Text style={styles.variationText}>Red</Text>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>4.7</Text>
                        <Rating rating={4.7} />                
                    </View>
                    <View style={{height:10}}></View>
                    
                    <View style={styles.row}>
                        <View style={styles.priceBox}>
                            <Text style={styles.price}>$ 20.00</Text>
                        </View>
                        <View>
                            <Text style={styles.primaryColorText}>upto 33% off  </Text>
                            <Text style={styles.fadedPrice}>$ 30.00</Text>
                        </View>

                    </View>
                    

                </View>
            </View>

            <View style={{height:12}}></View>
                        {/* Divider */}
                        <View style={{height:1, backgroundColor:'#E5E5E5'}}></View>
            <View style={{height:12}}></View>

            <View style={{...styles.row, justifyContent:'space-between'}}>
                <Text style={styles.title}>Total Order(1)</Text>
                <Text style={styles.price}>$ 20.00</Text>
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 12,
        borderRadius: 14,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        elevation: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      },
      ratingText:{
        marginRight: 8, 
        fontSize: 16, 
        fontFamily: 'Montserrat-Regular', 
        color: '#000',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: '#000',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
    },
    image: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        marginRight: 10,
    },
    price: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: '#000',
    },
    fadedPrice: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#A7A7A7',
        textDecorationLine: 'line-through',
        //textDecorationStyle: 'solid',
    },
    primaryColorText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: primaryColor,
    },
    variationTitile:{
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
        paddingRight: 4,
    },
    variationBox:{
        borderWidth: 1,
        borderColor: '#0E0808',
        borderRadius: 4,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 4,
        marginRight: 10,
    },
    priceBox:{
        borderWidth: 1,
        borderColor: '#CACACA',
        borderRadius: 4,
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight: 10,
    },
    variationText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
    },

});

export default CheckOutItem;