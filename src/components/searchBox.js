import React from "react";

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import { primaryColor } from '../constants/colors';
import {search } from '../constants/images';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
    return (
        <View style={styles.searchBox}>
                <Icon name="search-outline" size={20} color="#BBBBBB" />
                <TextInput placeholder="Search for anything" placeholderTextColor="#BBB" style={styles.searchInput} />
                <Icon name="mic-outline" size={20} color="#BBBBBB" />
            </View>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        borderRadius: 14,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        backgroundColor: 'white',
        paddingHorizontal: 16,
    },
    searchInput: {
        marginLeft: 10, 
       flex: 1,
        color: "black"
    },
});

export default SearchBox;