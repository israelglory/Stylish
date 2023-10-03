import React,{useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import AppHeader from '../components/appHeader';
import { maestro,visa,apple2,paypal, paymentDone } from "../constants/images";

import { primaryColor } from '../constants/colors';
import {search, email} from '../constants/images';
import PaymentMethod from "../components/paymentMethods";
import Popup from "../components/popUp";

const PaymentPage = ({navigation}) => {
    const [payment, setPayment] = useState(0);
    const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
    navigation.navigate('Home')
  };

    const paymentMethods = [
        {
            image: visa,
            selected: payment == 0,
        },
        {
            image: paypal,
            selected: payment == 1,
        },
        {
            image: maestro,
            selected: payment == 2,
        },
        {
            image: apple2,
            selected: payment == 3,
        }
    ];

    const handlePaymentSelection = (index) => {
        setPayment(index);
    }




    const onBack = () => {
        navigation.goBack();
    };
    return (
        <ScrollView style={styles.container}>
            <AppHeader centerTitle='Payment' noCart={false} onBack={onBack}  />
            <View style={{height:20}}></View>
            {/* Divider */}

            <View style={{height:1, backgroundColor:'#C6C6C6'}}></View>
            

            <View style={{height:17}}></View>

            <View style={[styles.horizontalPadding, styles.row]}>
                <Text style={styles.fadedText}>Order</Text>
                <Text style={styles.fadedText}>$ 7000</Text>
            </View>
            <View style={{height:17}}></View>
            <View style={[styles.horizontalPadding, styles.row]}>
                <Text style={styles.fadedText}>Shipping</Text>
                <Text style={styles.fadedText}>$ 30</Text>
            </View>

            <View style={{height:17}}></View>

            <View style={[styles.horizontalPadding, styles.row]}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.title}>$ 7030</Text>
            </View>

            <View style={{height:22}}></View>

            {/* Divider */}
            <View style={{height:1, backgroundColor:'#C4C4C4', marginHorizontal:20,}}></View>

            <View style={{height:22}}></View>
            
            <Text style={[styles.horizontalPadding, styles.row, styles.title]}>Payment</Text>

            <View style={{height:10}}></View>

            
                <FlatList
                    data={paymentMethods}
                    scrollEnabled ={false}
                    renderItem={({item, index}) => 
                        <TouchableOpacity onPress={() => handlePaymentSelection(index)}>
                        <View style={[styles.paympentContainer, item.selected && styles.active]}>
                            <Image source={item.image} style={styles.img} />
                            {<Text style={styles.fadedNumber}>***********2109</Text> }
                        </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            
            
            <TouchableOpacity style = {styles.btn} onPress={showPopup}>
                    <Text style={styles.btnText}>Pay Now!</Text>
              </TouchableOpacity>



              <Popup visible={isPopupVisible} onClose={hidePopup}>
                <Image source={paymentDone} style={{width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center'}} />
                <Text style={{fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#000', textAlign: 'center', marginTop: 20}}>Payment done successfully.</Text>
            </Popup>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FDFDFD'
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        alignContent:'center',
    },
    horizontalPadding:{
        paddingHorizontal:20,
    },
    bottomMargin:{
        marginBottom:20,
    },
    fadedText:{
        color:'#A8A8A9',
        fontSize:20,
        fontFamily:'Montserrat-SemiBold',
    },
    title:{
        fontSize:20,
        fontFamily:'Montserrat-SemiBold',
        color:'#000',
    
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
      paympentContainer: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        paddingVertical: 15,
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#F4F4F4',
        borderWidth:1,
        borderColor:'#F8F8F8',
        marginBottom: 25,
        marginHorizontal: 20,
    },
    active:{
        borderColor: '#F83758',
    },
    img:{
        width: 100,
        height: 25,
        resizeMode: 'contain',
       // backgroundColor: 'red',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    fadedNumber:{
        color:'#6E7179',
        fontSize:16,
        fontFamily: 'Montserrat-SemiBold',
    }
});

export default PaymentPage;