import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { logo } from "../constants/images";
import Icon from "react-native-vector-icons/Ionicons";

const CustomHeader = () => {
    return (
        <View style={{elevation:5}}>
            <View style={styles.header}>
                <View style={styles.menuContainer}>
                    <Icon name="menu" size={25} color="#000"/>
                </View>
                <Image source={logo} style={styles.logo}/>
                <Image source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80'}} style={styles.avatar}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 16,
    },
    menuContainer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 35,
        marginHorizontal: 10,
        resizeMode: "contain",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
    }
});

export default CustomHeader;
