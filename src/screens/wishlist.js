import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image} from "react-native";
import { useSelector } from "react-redux";
import SingleProduct from "../components/singleProduct";
import { emptyCart } from "../constants/images";

const WishlistScreen = ({navigation}) => {
    const wishListproducts = useSelector((state) => state.wishlistReducer.items);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.centerTitleText}>WishList</Text>
            </View>
            <View style={{height:20}}></View>
            {wishListproducts.length ===0? 
            <View style={{flexGrow:1, alignContent:'center', alignItems: 'center'}}>
                <Image source={emptyCart} style={styles.img} />
                <Text style={styles.text}>
                    No items in your wishlist
                </Text>
            </View> 
            :
            <FlatList 
                data={wishListproducts}
                keyExtractor={(item) => item.id}
                //horizontal
                numColumns={2}
                scrollEnabled={false}
                style={styles.container}
               // showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ProductDetail', {item})}>
                        <SingleProduct item={item} />
                    </TouchableOpacity>
                )}
            />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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

export default WishlistScreen;