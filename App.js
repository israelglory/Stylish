import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Hello world!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "tomato",
    },
});

export default App;

