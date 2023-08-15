import React from "react";
import{View,Text,StyleSheet,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Detail")}>
                <Text>Go to Detail Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:30
    }
})

export default HomeScreen;