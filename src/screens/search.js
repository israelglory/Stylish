import React from "react";
import {View, Text, StyleSheet} from "react-native";

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:'black'}}>Search Screen</Text>
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

export default SearchScreen;