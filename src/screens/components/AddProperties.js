import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';

const AddProperties = ({img, txt, title}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddingProperties')}
      style={styles.content}>
      <View style={styles.imageContainer}>
        <Image style={styles.home} source={img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.txt}>{txt}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Changed to white background
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#E0E0E0', // Lighter border color
    padding: heightToDp(4),
    marginVertical: heightToDp(1),
    borderRadius: 10,
    elevation: 3, // Adds shadow effect on Android
    shadowColor: '#000', // Adds shadow effect on iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  imageContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  home: {
    height: heightToDp('15%'),
    width: widthToDp('15%'),
    borderRadius: 10,
    resizeMode: 'contain', // Ensures image fits within the container
  },
  textContainer: {
    flex: 0.7,
    paddingLeft: widthToDp(4),
  },
  heading: {
    color: '#333333', // Darker text color
    fontFamily: 'Metropolis-Bold',
    fontSize: 20, // Larger font size
    fontWeight: '700', // Bold font weight
    marginBottom: heightToDp(1),
  },
  txt: {
    fontFamily: 'Metropolis-Regular',
    fontSize: 16, // Larger font size
    fontWeight: '400', // Regular font weight
    lineHeight: heightToDp(5),
    color: '#666666', // Slightly darker text color
  },
});

export default AddProperties;
