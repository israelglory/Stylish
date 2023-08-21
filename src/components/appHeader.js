import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import ImageCarousel from "../components/carousel";
import Icon from 'react-native-vector-icons/Ionicons';

const AppHeader = ({centerTitle, noCart, otherIcon, onBack}) => {
    return (
            <View style={styles.header}>
               <TouchableOpacity onPress={() => onBack()}>
                    <Icon name="chevron-back" size={30} color = '#000' />
                </TouchableOpacity>
                {centerTitle && <Text style={styles.centerTitleText}>{centerTitle}</Text>}


               {noCart &&  <View 
                style= {
                    {
                        backgroundColor: '#F2F2F2',
                        padding: 7,
                        borderRadius: 100,
                    }
                }
                >
                <Icon name="cart-outline" size={25}  color = '#000' />
                </View>}
                {otherIcon != null ? <Icon name={otherIcon} size={25}  color = '#000' /> : null}
                {!noCart && otherIcon == null && <View style={{width: 25}}></View>}

            </View>
        
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 18,
    },
    centerTitleText: {
        fontSize: 20, 
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
    },
});

export default AppHeader;