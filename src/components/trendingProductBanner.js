import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TrendingProductBanner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.columnSide}>
                <Text style={styles.text}>Trending Products </Text>
                <Text style={styles.time}><Icon name='calendar-month-outline' size={16} color='#fff' /> Last Date 29/02/22</Text>
            </View>
            <Text style={styles.viewAll}>View all <Icon name='arrow-right' size={16} color='#fff' /></Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FD6E87',
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 10,
    },
    columnSide: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        marginBottom: 8,
        color: '#fff',
    },
    time:{
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    viewAll: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
    }

})

export default TrendingProductBanner;