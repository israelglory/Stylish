import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { primaryColor, greyDot } from '../constants/colors';
import { splash1 } from '../constants/images';

const SingleIntro = ({title, desc, btntext, onTap, index, image, onBack, onSkip }) => {
    return (
        <View style={styles.sectionContainer}>

            { index != 2 ? <TouchableOpacity onPress={() => onSkip()}><Text style={styles.skip}>Skip</Text></TouchableOpacity> : <View style={styles.skip}></View>}

            <Image source={image} style={styles.image} />

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.desc}>{desc}</Text>

            
            <View style= {styles.buttonsRow}>

                {index != 0 ?<TouchableOpacity title="Back" style = {styles.textButton} onPress={() => onBack()}>
                    <Text style={{color:primaryColor, fontWeight: 'bold', fontSize: 20}}>Back</Text>
                </TouchableOpacity> : <Text style={{color:'white', fontWeight: 'bold', fontSize: 20}}>Back</Text>}

                <View style = {styles.dotRow}>
                    <View style={{
                        marginRight: 10,
                        backgroundColor:index == 0? "#17223B" : greyDot, 
                        width:index == 0? 40 : 10, 
                        borderRadius: 50,
                        ...styles.dot}}></View>
                    <View style={{
                        marginRight: 10,
                        backgroundColor:index == 1? '#17223B' : greyDot,
                        width:index == 1? 40 : 10, 
                        borderRadius: 50,
                         ...styles.dot, }}></View>
                    <View style={{
                        backgroundColor:index == 2? '#17223B' : greyDot, 
                        width:index == 2? 40 : 10,
                        borderRadius: 50,
                        ...styles.dot}}></View>
                </View>

                <TouchableOpacity style = {styles.btn} onPress={() => onTap()}>
                <Text style={styles.next}>Next</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
       // justifyContent: "center",
      // alignContent: "center",
        topPadding: 56,
       // paddingTop: 30,
    },
    
    skip: {
        fontSize: 24,
        
        color: 'black',
        textAlign: 'right',
        fontFamily: 'Montserrat-SemiBold',
        paddingRight: 30,
        paddingTop: 30,
        paddingBottom: 64,
    },
    image: {
        width: "90%",
        height: "50%",
        resizeMode: 'contain',
        padding: 0,
        margin: 0,
        alignSelf: "center",
       //backgroundColor: primaryColor,
    },
    title: {
        fontSize: 24,
       // fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
      //  paddingTop: 45,
        paddingBottom: 14,
    },
    desc: {
        fontSize: 18,
       // fontWeight: '600',
        color: '#A8A8A9',
        textAlign: 'center',
        lineHeight: 24,
        paddingStart: 74,
        paddingEnd: 74,
        paddingBottom: 30,
        fontFamily: 'Montserrat-SemiBold',
    },
    btn: {
        alignSelf: 'flex-end',
      },
    next: {
        color:primaryColor, 
        fontWeight: 'bold', 
        fontSize: 20,
    },
      dotRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        },
      dot: {
       
        height: 10,
        borderRadius: 100,
        //backgroundColor: primaryColor,
        //alignSelf: 'center',
        },
        textButton: {
            fontSize: 16,
            lineHeight: 21,
           // fontWeight: 'bold',
            fontFamily: 'Montserrat-Bold',
            letterSpacing: 0.25,
            color: primaryColor,
        },

    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 50,
        marginLeft: 50,
        marginRight: 30,
    }
});

export default SingleIntro;