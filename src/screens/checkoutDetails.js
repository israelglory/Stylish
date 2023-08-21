import React,{useState} from "react";
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
import Icon from 'react-native-vector-icons/Ionicons';

import { primaryColor } from '../constants/colors';
import {search, email} from '../constants/images';
import CustomInput from "../components/customInput";
import CheckOutImput from "../components/checkOutInput";

const CheckOutDetails = ({navigation}) => {
    const [email, setEmail] = useState('');

    const onEmailChange = (textValue) => setEmail(textValue);





    const onBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <AppHeader centerTitle='CheckOut' noCart={false} onBack={onBack}  />
            <View style={{height:20}}></View>

            <View>
                <Image source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80'}} style={styles.avatar}/>
                <Icon name='camera' size={20} color={primaryColor} style={{position:'absolute', bottom:0, right:0, backgroundColor:'#fff', borderRadius:100, padding:5}} />
            </View>

            <View style={{height:30}}></View>

            <Text style={styles.title}>Personal Details</Text>

            <View style={{height:20}}></View>

            {/* Email Address*/}
            <Text style={styles.feildTitle}>Email Address</Text>
            <CheckOutImput hint='Enter Email Address' onChange={onEmailChange} />

            {/* PassWord */}
            <Text style={styles.feildTitle}>Email Password</Text>
            <CheckOutImput hint='Enter Password' onChange={onEmailChange} />


            <View style={{height:36}}></View>

             {/* Divider */}
             <View style={{height:1, backgroundColor:'#E5E5E5', marginHorizontal:20,}}></View>

             <View style={{height:30}}></View>

            <Text style={styles.title}>Business Address Details</Text>

            <View style={{height:20}}></View>

             {/* Pincode */}
             <Text style={styles.feildTitle}>Pincode</Text>
            <CheckOutImput hint='Enter Pincode' onChange={onEmailChange} />

             {/* Address */}
             <Text style={styles.feildTitle}>Address</Text>
            <CheckOutImput hint='Enter Address' onChange={onEmailChange} />

             {/* City */}
             <Text style={styles.feildTitle}>City</Text>
            <CheckOutImput hint='Enter City' onChange={onEmailChange} />
            
             {/* State */}
             <Text style={styles.feildTitle}>State</Text>
            <CheckOutImput hint='Enter State' onChange={onEmailChange} />

             {/* Country */}
             <Text style={styles.feildTitle}>Country</Text>
            <CheckOutImput hint='Enter Country' onChange={onEmailChange} />

             {/* Country */}
             <Text style={styles.feildTitle}>Country</Text>
            <CheckOutImput hint='Enter Country' onChange={onEmailChange} />

             {/* Divider */}
             <View style={{height:1, backgroundColor:'#E5E5E5', marginHorizontal:20,}}></View>

            <View style={{height:30}}></View>

            <Text style={styles.title}>Bank Account Details</Text>

            <View style={{height:20}}></View>

             {/* Bank Account Number */}
             <Text style={styles.feildTitle}>Bank Account Number</Text>
            <CheckOutImput hint='Enter Bank Account Number' onChange={onEmailChange} />
            
             {/* Account Holder’s Name */}
             <Text style={styles.feildTitle}>Account Holder’s Name</Text>
            <CheckOutImput hint='Enter Account Holder’s Name' onChange={onEmailChange} />

             {/* IFSC Code */}
             <Text style={styles.feildTitle}>IFSC Code</Text>
            <CheckOutImput hint='Enter IFSC Code' onChange={onEmailChange} />


            <TouchableOpacity style = {styles.btn} onPress={() => navigation.navigate('CheckOut')}>
                    <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FDFDFD',
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 100,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: "#000",
        paddingHorizontal: 20,
    },
    feildTitle: {
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold",
        color: "#000",
        paddingHorizontal: 20,
        marginBottom: 16,
    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //width: "100%",
        paddingVertical: 24,
        //height: 60,
        borderRadius: 10,
        marginHorizontal: 24,
        backgroundColor: primaryColor,
        marginBottom: 24,
      },
      btnText: {
        fontSize: 23,
        lineHeight: 21,
        letterSpacing: 0.25,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Bold',
      },

});

export default CheckOutDetails;