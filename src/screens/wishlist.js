import React from "react";
import {View, Text, StyleSheet} from "react-native";

const WishlistScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:'black'}}>WishList Screen</Text>
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

export default WishlistScreen;