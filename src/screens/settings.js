import React from "react";
import {View, Text, StyleSheet} from "react-native";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:'black'}}>Settings Screen</Text>
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

export default SettingsScreen;