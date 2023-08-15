import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const IntroScreen = ({ navigation }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text>Intro Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
});

export default IntroScreen;