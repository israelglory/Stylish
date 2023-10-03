import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 


const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
  
    // Create an array of star elements based on the number of full stars
    const stars = Array.from({ length: fullStars }, (_, index) => (
      <Icon name="star" size={20} color="#EDB310" key={index} />
    ));
  
    // Add a half star if necessary
    if (halfStar) {
      stars.push(<Icon name="star-half" size={20} color="#EDB310" key="half" />);
    }
  
    // Fill the remaining stars with outline stars
    while (stars.length < 5) {
      stars.push(<Icon name="star-outline" size={20} color="#EDB310" key={stars.length} />);
    }
  
    return <View style={styles.ratingContainer}>{stars}</View>;
  };

  const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


  
export default Rating;