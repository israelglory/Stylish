import React,{useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
//import Rating from "../components/rating";

import { primaryColor } from '../constants/colors';
import {search, email} from '../constants/images';
import Icon from 'react-native-vector-icons/Entypo';
import Rating from "./rating";
import { useCart } from "../cartUtil/cartUtil";

const CheckOutItem = ({item}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [totalAmount, setTotalAmount] = useState(item.price);
    const amount= item.price;
    const showAddedToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
      };

    const { handleRemoveFromCart, handleIncrementQuantity, handleDecrementQuantity } = useCart();
    //console.log(item);
    const increment = () => {
        handleIncrementQuantity(item);
        setQuantity(item.quantity);
        setTotalAmount(amount*item.quantity);
        showAddedToast('Added to cart');
    }
    const decrement = () => {
        handleDecrementQuantity(item.id);
        setQuantity(item.quantity);
        setTotalAmount(amount*item.quantity);
        showAddedToast('Removed to cart');
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{uri:item.image}} style={styles.image} />

                <View style={{flexGrow: 1}}>
                    <Text style={styles.productTitle}>{item.title}</Text>

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
                            <Text style={styles.price}>${amount.toFixed(2)}</Text>
                        </View>
                        <View>
                            <Text style={styles.primaryColorText}>upto 33% off  </Text>
                            <Text style={styles.fadedPrice}>${(amount+100).toFixed(2)}</Text>
                        </View>

                    </View>
                    <View style={{height:10}}></View>
                    <View style={styles.row}>

                        <TouchableOpacity style = {styles.iconButton} onPress={() => {increment()}}>
                            <Icon name='chevron-small-up' size={20} color='#fff' />
                        </TouchableOpacity>

                        <View style={{width:12}}></View>
                        <Text style={styles.ratingText}>{quantity}</Text>
                        <View style={{width:12}}></View>
                        <TouchableOpacity style = {styles.iconButton} onPress={() => {decrement()}}>
                        <Icon name='chevron-small-down' size={20} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{height:12}}></View>
                        {/* Divider */}
                        <View style={{height:1, backgroundColor:'#E5E5E5'}}></View>
            <View style={{height:12}}></View>

            <View style={{...styles.row, justifyContent:'space-between'}}>
                <Text style={styles.title}>Total Order({quantity})</Text>
                <Text style={styles.price}>${totalAmount.toFixed(2)}</Text>
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
        flex:1
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
    productTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: '#000',
        
        marginRight:160,
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
    iconButton:{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //width: "100%",
        padding:8,
        //height: 60,
        borderRadius: 10,
        

        
        backgroundColor: primaryColor,
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