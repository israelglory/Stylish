import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import AppHeader from '../components/appHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';

import { primaryColor } from '../constants/colors';
import {search, email} from '../constants/images';

const CheckOut = ({navigation}) => {
    const onBack = () => {
        navigation.goBack();
    };
    return (
        <ScrollView style={styles.container}>
            <AppHeader centerTitle='CheckOut' noCart={false} onBack={onBack}  />
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flexDirection:'row',
        
    },
    title:{
        fontSize:18,
        fontFamily:'Montserrat-SemiBold',
        color:'#000',
    },
    addressBox:{
        width:'75%',
        boxShadow:'0px 6px 14px -8px rgba(0, 0, 0, 0.25), 0px -4px 9px -7px rgba(0, 0, 0, 0.25)',
        borderRadius:6,
        backgroundColor:'#fff',
    },
    addAddress:{
        padding:27,
        borderRadius:6,
        backgroundColor:'#fff',
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
    },
    addressText: {
        marginLeft:20, 
        fontFamily:'Montserrat-Regular', 
        fontSize:14,
        color:'#000',
    },
});

export default CheckOut;