import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import AppHeader from '../components/appHeader';
import Icon from 'react-native-vector-icons/Entypo';

import { primaryColor } from '../constants/colors';
import {couponIcon,} from '../constants/images';


const ShoppingBag = ({navigation, route}) => {
    const { product } = route.params;
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(product.price);
    const onBack = () => {
        navigation.goBack();
    };
    const increment = () => {
        setQuantity(quantity+1);
        setAmount(amount + product.price)
    }
    const decrement = () => {
        if(quantity>1){
            setQuantity(quantity-1);
            setAmount(amount - product.price)
        }
    }
    return (
        <ScrollView style={styles.container}>
        <AppHeader centerTitle='Shopping Bag' noCart={false} onBack={onBack} otherIcon={'heart-outline'}/>

        <View style={{height:38}}></View>
        <View style={styles.topRow}>
        <Image source={{uri:product.image}} style={styles.image} />
            
            <View style={styles.marginRightApp}>
                <Text  style={{...styles.flexAndWrap, marginEnd:150}}>{product.title}</Text>
                <View style={{height:8}}></View>
                <Text numberOfLines={2} style={{...styles.subtitle,marginEnd:150}} ellipsizeMode="tail">{product.description}</Text>
                <View style={{height:8}}></View>

                <View style={styles.nrow}>

                    <TouchableOpacity style = {styles.iconButton} onPress={() => {increment()}}>
                        <Icon name='chevron-small-up' size={20} color='#fff' />
                    </TouchableOpacity>

                    <View style={{width:12}}></View>
                    <Text style={styles.subtitle}>{quantity}</Text>
                    <View style={{width:12}}></View>
                    <TouchableOpacity style = {styles.iconButton} onPress={() => {decrement()}}>
                    <Icon name='chevron-small-down' size={20} color='#fff' />
              </TouchableOpacity>
                </View>
                <View style={{height:12}}></View>    
                <Text style={styles.subtitle}>Delivery by  <Text style={styles.title}>10 Dec. 2023 </Text></Text>
            </View>
        </View>


        <View style={{height:38}}></View>

        <View style={{...styles.nrow, ...styles.appHorizontalMargin}}>
            <Image source={couponIcon} style={styles.icon} />
            <View style={{width:10}}></View>
            <Text numberOfLines={1} style={styles.title}>Apply Coupons</Text>
            <View style={{flex:1}}></View>
            <Text numberOfLines={1} style={styles.pinkText}>Select</Text>
        </View>
        <View style={{height:38}}></View>
        {/* Divider */}
        <View style={{height:1, backgroundColor:'#E5E5E5', ...styles.appHorizontalMargin}}></View>
        <View style={{height:38}}></View>


        <Text numberOfLines={1} style={{...styles.title, ...styles.appHorizontalMargin}}>Order Payment Details</Text>
        <View style={{height:26}}></View>
        <View style={{...styles.nrow, ...styles.appHorizontalMargin, ...styles.spaceBetween}}>
            <Text numberOfLines={1} style={styles.subtitle}>Order Amounts</Text>
            <Text numberOfLines={1} style={styles.title}>${amount.toFixed(2)}</Text>
        </View>
        <View style={{height:12}}></View>
        <View style={{...styles.nrow, ...styles.appHorizontalMargin, ...styles.spaceBetween}}>
            <Text numberOfLines={1} style={styles.subtitle}>Convenience</Text>
            <Text numberOfLines={1} style={styles.pinkText}>Apply Coupon</Text>
        </View>
        <View style={{height:12}}></View>
        <View style={{...styles.nrow, ...styles.appHorizontalMargin, ...styles.spaceBetween}}>
            <Text numberOfLines={1} style={styles.subtitle}>Delivery Fee</Text>
            <Text numberOfLines={1} style={styles.pinkText}>Free</Text>
        </View>

        <View style={{height:38}}></View>
        {/* Divider */}
        <View style={{height:1, backgroundColor:'#E5E5E5', ...styles.appHorizontalMargin}}></View>
        <View style={{height:38}}></View>

        <View style={{...styles.nrow, ...styles.appHorizontalMargin, ...styles.spaceBetween}}>
            <Text numberOfLines={1} style={styles.title}>Order Total</Text>
            <Text numberOfLines={1} style={styles.title}>${amount.toFixed(2)}</Text>
        </View>
        <View style={{height:12}}></View>
        <View style={{...styles.nrow, ...styles.appHorizontalMargin,}}>
            <Text numberOfLines={1} style={styles.subtitle}>EMI  Available</Text>
            <View style={{width:8}}></View>
            <Text numberOfLines={1} style={styles.pinkText}>Details</Text>
        </View>

        <View style={{height:38}}></View>
        {/* Total Amount and proceed to checkout*/}
        <View style={{...styles.nrow, ...styles.appHorizontalMargin, ...styles.spaceBetween}}>
            
            <View>
            <Text numberOfLines={1} style={styles.title}>${amount.toFixed(2)}</Text>
            <Text numberOfLines={1} style={styles.pinkText}>View Details</Text>
            </View>
            <View style={{width:12}}></View>
            <TouchableOpacity style = {styles.btn} onPress={() => navigation.navigate('CheckOutDetail', {amount})}>
                    <Text style={styles.btnText}>Proceed to Payment</Text>
              </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    topRow:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        marginHorizontal:20,
    },
    
    nrow:{
        flexDirection:'row',
        //justifyContent:'space-between',
        alignItems:'center',
        flex:1,
        //paddingHorizontal:20,
        //paddingVertical:10,
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
    marginRightApp:{
        marginRight:20,
        flexDirection:'column',
    },
    image: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        marginRight: 10,

    },
    title:{
        fontSize:18,
        fontFamily:'Montserrat-SemiBold',
        color:'#000',
    },
    flexAndWrap:{

        flexWrap:'wrap',

        fontSize:18,
        fontFamily:'Montserrat-SemiBold',
        color:'#000',
    },
    priceText:{
        fontSize:18,
        fontFamily:'Montserrat-SemiBold',
        color:'#000',
    },
    icon:{
        height:24,
        width:24,
        resizeMode:'contain',
    },
    subtitle:{
        fontSize:18,
        fontFamily:'Montserrat-Regular',
        color:'#000',
    },
    pinkText:{
        fontSize:16,
        fontFamily:'Montserrat-SemiBold',
        color:primaryColor,
    
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //width: "100%",
        paddingVertical: 16,
        //height: 60,
        borderRadius: 10,
        paddingHorizontal: 32,

        
        backgroundColor: primaryColor,
        
      },
      btnText: {
        fontSize: 17,
        
        letterSpacing: 0.25,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Bold',
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


});

export default ShoppingBag;