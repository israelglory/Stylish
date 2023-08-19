import React from "react";
import{View,Text,StyleSheet,TouchableOpacity, ScrollView, FlatList, Image} from "react-native";
import CustomHeader from "../components/customAppBar";
import SearchBox from "../components/searchBox";
import CustomButon from "../components/cutombutton";
import CustomCategories from "../components/customCategories";
import { categories } from "../constants/categories";
import { homeBanner, mac } from "../constants/images";
import DealOfTheDay from "../components/dealOdTheDay";
import TrendingProductBanner from "../components/trendingProductBanner";
import SpecialOffer from "../components/specialOffer";
import NewArrivalBanner from "../components/newArrivalBanner";
import SponsoredBanner from "../components/sponsoredBanner";
import SingleProduct from "../components/singleProduct";
import { products, moreProducts } from "../constants/data";
import DummySingleProduct from "../components/dummyProduct";

const HomeScreen = ({navigation}) => {
    const images = [homeBanner, homeBanner, homeBanner];


    
    return(
        <ScrollView style={styles.container}>
            <CustomHeader />
            <SearchBox />

            {/* All Featured Section */}
            <View style={styles.allFeaturedSection}>
                <Text style={styles.allFeaturedtext}>All Featured</Text>
                <View style = {{flexDirection: 'row'}}>
                    <CustomButon text='Sort' icon={'sort'} />
                    <View style={{width: 12}} />
                    <CustomButon text='Sort' icon={'filter'} />
                </View>
            </View>

            {/* All Categories */}
            <View style={styles.categorySection}>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <CustomCategories image={item.image} text={item.text} />
                    )}
                />
            </View>

            {/* Banner Section */}
            <Image source={homeBanner} style={styles.banner} />
            {/* <View style = {styles.bannersection}>
                <ImageCarousel images={images} />
            </View> */}

            
            {/* Deal of the day Section*/}
            <DealOfTheDay />
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id}
                horizontal
                //numColumns={2}
                //scrollEnabled={false}
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {item})}>
                    <SingleProduct item={item} />
                </TouchableOpacity>

                )}
            />

            <View style={{height:20}}>

            </View>

            {/* Special Offer Section */}
            <SpecialOffer />

            {/* Flat Heels Section */}
            <Image source={mac} style={styles.mac} />
            
            {/* Trending Product Section */}
            <TrendingProductBanner  />
            <FlatList 
                data={moreProducts}
                keyExtractor={(item) => item.id}
                horizontal
                //numColumns={2}
                //scrollEnabled={false}
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                   <DummySingleProduct item={item} />
                )}
            />

            <View style={{height:20}}></View>

            {/* New Arrival Section */}
            <NewArrivalBanner />

            {/* Sponserd */}

            <SponsoredBanner />

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9',
    },
    allFeaturedSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 17,
    },
    allFeaturedtext:{
        fontSize:20,
        fontFamily:'Montserrat-Bold',
        color:'#000000',
    },
    categorySection:{
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 16,
        paddingVertical: 8,
    },
    banner:{
        width: '95%',
        height: 250,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 20,
    },
    bannersection:{
        marginHorizontal: 16,
    },
    mac:{
        width: '95%',
        height: 250,
        alignSelf: 'center',
        resizeMode: 'contain',
    }
})

export default HomeScreen;