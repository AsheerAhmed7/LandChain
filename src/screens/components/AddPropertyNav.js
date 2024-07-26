import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/responsive';
import ImageUpload from '../../utils/ImageUpload';
import {useNavigation} from '@react-navigation/native';
const AddPropertyNav = ({txt, setIndex, index}) => {
  const navigation = useNavigation();
  const [width, setWidth] = useState(widthToDp('60%'));
  const HandleBtn = () => {
    {
      index
        ? index != 1
          ? setIndex(prev => prev - 1)
          : navigation.goBack()
        : navigation.goBack();
    }
  };
  useEffect(() => {
    txt == 'Preview Listing' ? setWidth(widthToDp('65%')) : null;
  }, []);
  return (
    <View style={[styles.bar, {width: width}]}>
      <TouchableOpacity onPress={() => HandleBtn()}>
        <Image style={styles.barImg} source={ImageUpload.arrow} />
      </TouchableOpacity>
      <Text style={styles.heading}>{txt}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightToDp(15),
    //width: widthToDp('60%'),
    justifyContent: 'space-between',
  },
  barImg: {
    height: heightToDp(5),
    width: widthToDp(5),
    marginRight: widthToDp(4),
  },
  heading: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Metropolis-Bold',
  },
});
export default AddPropertyNav;
