import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImageUpload from '../../utils/ImageUpload';
import {heightToDp, widthToDp} from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
const Navbar = ({text, text2}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        marginTop: heightToDp(2),
      }}>
      <View style={styles.navbar}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.txt}>{text}</Text>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity>
            <Image style={styles.img} source={ImageUpload.locationicon}></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image style={styles.img} source={ImageUpload.search}></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image style={styles.img} source={ImageUpload.notify}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.heading}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
  },
  img: {
    height: heightToDp(5),
    width: widthToDp(5),
    marginRight: widthToDp(3),
    resizeMode: 'contain',
  },
  txt: {
    color: '#000000',
    fontFamily: 'Metropolis-Medium',
    fontSize: 18,
  },
  heading: {
    fontSize: 25,

    lineHeight: heightToDp(15),
    color: '#000000',
    fontFamily: 'Metropolis-Bold',
    fontWeight: 'bold',
  },
});
export default Navbar;
