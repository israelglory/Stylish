import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity} from "react-native";
import { useCart } from "../cartUtil/cartUtil";
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';

import { primaryColor } from '../constants/colors';
import CheckOutItem from "../components/checkoutItem";
import AppHeader from "../components/appHeader";
import { emptyCart } from "../constants/images";

const CartScreen = ({navigation}) => {

    const products = useSelector((state) => state.cartReducer.items);
    const cartTotal = useSelector((state) => state.cartReducer.total);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.centerTitleText}>Cart</Text>
            </View>
            <View style={{height:20}}></View>

            {/* Delivery Address*/}
            <View style={styles.row}>
                <View style={{width:20}}></View>
                <Icon name='location-outline' size={20} color='#000' />
                <Text style={styles.title}>Delivery Address</Text>
            </View>
            <View style={{height:20}}></View>
            <View style={{...styles.row, marginLeft:20}}>
                <View style={styles.addressBox}>
                    <View style={{height:10}}></View>
                    <Text style={{...styles.title, marginLeft:20}}>Address</Text>
                    <Icon2 name='square-edit-outline' size={20} color='#000' style={{position:'absolute', right:20, top:10}} />
                    <View style={{height:10}}></View>
                    <Text style={styles.addressText}>123, Lorem Ipsum, Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</Text>
                    <View style={{height:10}}></View>
                </View>
                <View style={styles.addAddress}>
                    <Icon3 name='add-circle-outline' size={24} color='#000' />
                </View>
            </View>

             {/* Shooping List */}
            <View style={{height:24}}></View>
            <Text style={{...styles.title, marginLeft:20}}>Shopping List</Text>
            <View style={{height:10}}></View>
            {
                products.length === 0 ? 
                <View style={{flexGrow:1, alignContent:'center', alignItems: 'center'}}>
                    <Image source={emptyCart} style={styles.img} />
                    <Text style={styles.text}>
                        No items in your wishlist
                    </Text>
                </View> 
                :
                <>
                    <FlatList 
                        data={products}
                        keyExtractor={(product) => product.id}
                        
                        //numColumns={2}
                        scrollEnabled={false}
                        style={styles.container}
                        
                        renderItem={({item}) => (
                            <CheckOutItem item={item} />
                        )}
                    />
                    <View style={{...styles.row, ...styles.appHorizontalMargin, ...styles.spaceBetween}}>
            
                            <View>
                            <Text numberOfLines={1} style={styles.title}>${cartTotal.toFixed(2)}</Text>
                            <Text numberOfLines={1} style={styles.pinkText}>View Details</Text>
                            </View>
                            <View style={{width:12}}></View>
                            <TouchableOpacity style = {styles.btn} onPress={() => navigation.navigate('CheckOutDetail', {amount:cartTotal})}>
                                    <Text style={styles.btnText}>Proceed to Payment</Text>
                            </TouchableOpacity>
                    </View>
                </>
                
            }
            
            

        

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        
    },
    row:{
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        fontFamily:'Montserrat-SemiBold',
        color:'#000',
    },
    addressBox:{
        width:'75%',
        elevation: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        borderRadius:6,
        backgroundColor:'#fff',
    },
    pinkText:{
        fontSize:16,
        fontFamily:'Montserrat-SemiBold',
        color:primaryColor,
    },
    addAddress:{
        padding:27,
        borderRadius:6,
        backgroundColor:'#fff',
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
        elevation: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    addressText: {
        marginLeft:20, 
        fontFamily:'Montserrat-Regular', 
        fontSize:14,
        color:'#000',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //width: "100%",
        paddingVertical: 16,
        //height: 60,
        borderRadius: 10,
        paddingHorizontal: 16,
        //marginHorizontal: 24,
        backgroundColor: primaryColor,
        marginBottom: 24,
      },
      btnText: {
        fontSize: 18,
        
        letterSpacing: 0.25,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Bold',
      },
      header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 18,
    },
    centerTitleText: {
        fontSize: 20, 
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
    },
    appHorizontalMargin:{
        marginHorizontal:20,
    },
    spaceBetween:{
        justifyContent:'space-between',
    },
    appVerticalMargin:{
        marginVertical:10,
    },
    img:{
        width: 400, 
        height: 400,
        resizeMode: 'contain',
    },
    text:{
        fontSize: 25,
        fontFamily:'Montserrat-Bold',
        color:'grey',

    }
});

export default CartScreen;