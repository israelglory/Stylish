import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ProductDetail = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:'black'}}>ProductDetail Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ProductDetail;