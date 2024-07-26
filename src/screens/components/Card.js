import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageUpload from '../../utils/ImageUpload';
import {heightToDp, widthToDp} from '../../utils/responsive';

const Card = ({screen}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CardDetails')}
      style={styles.wrapper}>
      <View>
        <View>
          <Image style={styles.img} source={ImageUpload.card} />
        </View>
        <View style={styles.priceBox}>
          <Text
            style={{
              fontSize: 15,
              color: '#FFFFFF',
              fontFamily: 'Inter-Medium',
            }}>
            50000
          </Text>
        </View>

        <View style={styles.promotionWrapper}>
          <View
            style={{
              backgroundColor: '#F4F6F9',
              borderWidth: 2,
              borderColor: '#F4F6F9',
              padding: widthToDp(1),
              paddingLeft: widthToDp(3),
              paddingRight: widthToDp(3),
              borderRadius: heightToDp(2),
            }}>
            <Text style={[styles.txt]}>Sell</Text>
          </View>

          <Text
            style={{
              fontFamily: 'Inter-Regular',
              color: '#FFFFFF',
              fontSize: 12,
            }}>
            Contact Owner
          </Text>
        </View>
        <View style={{marginLeft: widthToDp(1)}}>
          <Text style={styles.title}>Title of Property</Text>
          <View style={{flexDirection: 'row', marginBottom: heightToDp(1)}}>
            <Image
              style={[styles.icon, {marginLeft: widthToDp(0)}]}
              source={ImageUpload.location}
            />
            <Text style={{fontFamily: 'Inter-Regular'}}>
              address of property
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 0.37,
    marginBottom: heightToDp(6),
    borderWidth: 2,
    borderColor: '#E2EBFF',
    borderRadius: widthToDp(3),
    backgroundColor: 'rgba(226, 235, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: heightToDp(3),
  },
  img: {
    height: heightToDp('35%'),
    width: widthToDp('85%'),
    borderRadius: widthToDp('2%'),
  },
  promotionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: heightToDp(1),
    marginTop: heightToDp(4),
  },
  promotion: {
    backgroundColor: '#00A86B',
    borderColor: '#00A86B',
    borderWidth: 1,
    borderRadius: widthToDp(2),
    padding: widthToDp(1),
    paddingLeft: widthToDp(3),
    paddingRight: widthToDp(3),
  },
  txt: {
    color: '#FFA714',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
  title: {
    fontFamily: 'Inter-Medium',
    color: 'black',
    fontSize: 18,
    lineHeight: heightToDp(10),
  },
  icon: {
    height: heightToDp(3),
    width: widthToDp(3),
    margin: widthToDp(1),
    resizeMode: 'contain',
  },
  priceBox: {
    backgroundColor: '#FEC031',
    borderColor: '#FEC031',
    borderRadius: 5,
    position: 'absolute',
    right: widthToDp(3),
    top: heightToDp(25),
    padding: heightToDp(1),
    paddingLeft: heightToDp(2),
    paddingRight: heightToDp(2),
  },
  fav: {
    backgroundColor: '#FFFFFF99',
    borderColor: '#FFFFFF99',
    borderWidth: 2,
    width: widthToDp(8),
    borderRadius: heightToDp(4),
    height: heightToDp(8),
    position: 'absolute',
    top: heightToDp(3),
    right: widthToDp(3),
    justifyContent: 'center',
    alignItems: 'center',
    padding: heightToDp(2),
  },
  wrapperModal: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    padding: heightToDp(3),
    paddingLeft: widthToDp(8),
    paddingRight: widthToDp(8),
    width: widthToDp('100%'),
    borderTopRightRadius: heightToDp(3),
    borderTopLeftRadius: heightToDp(3),
  },
  modalTxt: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  cross: {
    position: 'absolute',
    top: heightToDp(5),
    right: widthToDp(7),
  },
});
export default Card;
