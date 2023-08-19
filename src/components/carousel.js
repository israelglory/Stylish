import React, { useState } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { primaryColor } from '../constants/colors';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / Dimensions.get('window').width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {images.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DEDBDB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: primaryColor,
  },

  
});

export default ImageCarousel;
