import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageCarousel from "../components/carousel";
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from "../components/appHeader";

const ProductDetail = ({navigation}) => {
    const onBack = () => {
        navigation.goBack();
    };
    const image = [
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg'
    ]
    return (
        <View style={styles.container}>
            <AppHeader centerTitle='Product Detail' noCart={false} onBack={onBack} />
            <View style={{height:20}}></View>
            <ImageCarousel images={image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 18,
        backgroundColor: "red",
    },
});

export default ProductDetail;