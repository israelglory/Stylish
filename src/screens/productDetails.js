import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView} from "react-native";
import ImageCarousel from "../components/carousel";
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from "../components/appHeader";
import { primaryColor } from "../constants/colors";
import { goToCart,buyNow,padLock,location,refund,phone } from "../constants/images";
import CustomButon from "../components/cutombutton";
import SingleProduct from "../components/singleProduct";
import { products, moreProducts } from "../constants/data";

const ProductDetail = ({navigation, route}) => {

    const { item } = route.params;

    const onBack = () => {
        navigation.goBack();
    };
    
    const image = [
            item.image,
        'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg'
    ]
    return (

        <ScrollView>
            <View style={styles.container}>
            <AppHeader centerTitle='Product Detail' noCart={true} onBack={onBack}  />
            <View style={{height:20}}></View>
            <ImageCarousel images={image} />

            <Text style={styles.procuctTitleText}>{item.title}</Text>
            <View style={styles.priceSection}>
                <Text style={styles.fadedText}>₹{item.price + 100}</Text>
                <Text style={styles.priceText}>₹{item.price}</Text>
                <Text style={styles.offerText}>50% Off</Text>
            </View>
            <Text style={styles.title}>Product Details</Text>
            <Text style={styles.procuctDescriptionText}>{item.description}.</Text>

            <View style={styles.characterSection}>
                <View style={styles.singleCharacter}>
                    <Image source={location} style={styles.icon} />
                    <Text style={styles.charcterText}>Nearest Store</Text>
                </View>
                <View style={styles.singleCharacter}>
                    <Image source={padLock} style={styles.icon} />
                    <Text style={styles.charcterText}>VIP</Text>
                </View>
                <View style={styles.singleCharacter}>
                    <Image source={refund} style={styles.icon} />
                    <Text style={styles.charcterText}>Return policy</Text>
                </View>
            </View>


            <View style={styles.goToCartSection}>
                <TouchableOpacity  onPress={()=>navigation.navigate('CartStack')}>
                    <Image source={goToCart} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>navigation.navigate('CheckOut')}>
                    <Image source={buyNow} style={styles.img} />
                </TouchableOpacity>
            </View>

            <View style={styles.deliverySection}>
                <Text style={styles.deliveryIn}>Delivery in</Text>
                <Text style={styles.deliveryTime}>1 within Hour</Text>
            </View>

            <View style={styles.similarSection}>
                <View style={styles.singleSimilar}>
                    <Icon name="eye-outline" size={24} color = '#000' />
                    <Text style={styles.similarText}>View Similar</Text>
                </View>
                <View style={styles.singleSimilar}>
                    <Image source={phone} style={{height:24, width:24, resizeMode:'contain'}} />
                    <Text style={styles.similarText}>Add to Compare</Text>
                </View>
            </View>

            <Text style={styles.title}>Product Details</Text>
            <View style={styles.relatedSection}>
                <Text style={styles.title}>282+ Iteams </Text>
                <View style = {{flexDirection: 'row'}}>
                        <CustomButon text='Sort' icon={'sort'} />
                        <View style={{width: 12}} />
                        <CustomButon text='Sort' icon={'filter'} />
                        <View style={{width: 20}} />
                    </View>
            </View>
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id}
                //horizontal
                numColumns={2}
                scrollEnabled={false}
                style={styles.container}
               // showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                   <SingleProduct item={item} />
                )}
            />
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 18,
        backgroundColor: "red",
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: "#000",
        paddingHorizontal: 20,
        marginTop: 16,

    },
    procuctTitleText:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: '#000',
        paddingHorizontal: 20,
        marginTop: 34,
    },
    procuctDescriptionText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        color: '#000',
        paddingHorizontal: 20,
    },
    priceSection:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
        marginTop: 8, 
    },
    priceText:{
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
        paddingTop: 5,
        paddingBottom: 5,
    },
    offerText:{
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: primaryColor,
        marginLeft: 8,
    },
    fadedText:{
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: '#808488',
        textDecorationLine: 'line-through',
        marginRight: 8,
    },
    img:{
        height: 36,
        width: 136,
        resizeMode: 'contain',
    },
    characterSection:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        marginHorizontal: 20,
        marginTop: 14,
    },
    charcterText:{
        fontSize: 16, 
        fontFamily: 'Montserrat-Regular', 
        color: '#000', 
        marginLeft: 8,
    },
    singleCharacter:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#808488',
        marginRight: 8,
    },
    icon:{
        height:16,
        width:16,
        resizeMode:'contain',
    },
    goToCartSection:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center',
        paddingHorizontal:16,
        marginTop:14,
    },
    deliverySection:{
        backgroundColor: '#FFCCD5',
        paddingLeft: 20,
        paddingVertical: 11,
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 14,
    },
    deliveryIn:{
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
    },
    deliveryTime:{
        fontSize: 21,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
    },
    similarSection:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
        marginTop: 14,
    },
    singleSimilar:{
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        marginRight: 8,
        backgroundColor: '#fff',
    },
    similarText:{
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
        marginLeft: 8,
    },
    relatedSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        //paddingHorizontal: 20,
        //marginTop: 14,
    },

});

export default ProductDetail;