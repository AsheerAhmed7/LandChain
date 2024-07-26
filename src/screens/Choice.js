import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {heightToDp, widthToDp} from '../utils/responsive';

import ImageUpload from '../utils/ImageUpload';
import {useNavigation} from '@react-navigation/native';
const Choice = () => {
  const [owner, setOwner] = useState(true);
  const navigation = useNavigation();
  const [laoding, setLoading] = useState(false);
  const [ownerBorderColor, setOwnerBorderColor] = useState('black');

  const [broker, setBroker] = useState(false);
  const [brokerBorderColor, setBrokerBorderColor] = useState('#F1F1F1');

  const handleOwnerBox = owner => {
    setOwner(true);
    setOwnerBorderColor('black');
    if (broker) {
      setBroker(false);
      setBrokerBorderColor('#F1F1F1');
    }
  };
  const handleBrokerBox = broker => {
    setBroker(true);
    setBrokerBorderColor('black');
    if (owner) {
      setOwner(false);
      setOwnerBorderColor('#F1F1F1');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapHeader}>
        <View style={styles.header}>
          <Text style={styles.heading}>Where do you want to navigate?</Text>
        </View>
      </View>
      <View style={{flex: 0.64}}>
        <TouchableOpacity
          style={[styles.box, {borderColor: ownerBorderColor}]}
          onPress={() => handleOwnerBox('owner')}>
          <Image style={styles.img} source={ImageUpload.owner}></Image>
          <Text style={styles.boxtxt}>Market Place</Text>
          {owner ? (
            <Image style={styles.tick} source={ImageUpload.tick}></Image>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, {borderColor: brokerBorderColor}]}
          onPress={() => handleBrokerBox('broker')}>
          <Image style={styles.img} source={ImageUpload.broker}></Image>
          <Text style={styles.boxtxt}>DashBoard</Text>
          {broker ? (
            <Image style={styles.tick} source={ImageUpload.tick}></Image>
          ) : null}
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginBottom: heightToDp(10),
          marginTop: heightToDp(30),
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Home');
            // navigation.navigate('VideoScreen');
          }}>
          <Text style={styles.btntxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapHeader: {
    flex: 0.35,
    backgroundColor: '#F8F9FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightToDp(10),
    paddingTop: heightToDp(5),
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthToDp('50%'),
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Metropolis-ExtraBold',
    color: '#212121',
    marginBottom: heightToDp(5),
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Metropolis-Regular',
    color: '#000000',
    lineHeight: heightToDp(6),
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    width: widthToDp('90%'),
    height: heightToDp('25%'),
    margin: 20,
  },
  img: {
    height: heightToDp('10%'),
    width: widthToDp('10%'),
  },
  boxtxt: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Metropolis-Bold',
    color: '#000000',
    marginLeft: 15,
  },
  tick: {
    height: heightToDp('5%'),
    width: widthToDp('5%'),
    position: 'absolute',
    top: 10,
    right: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: widthToDp('90%'),
    height: heightToDp(13),
    borderWidth: 2,
    borderRadius: widthToDp(4),
    backgroundColor: 'black',
    borderColor: 'black',
    marginTop: heightToDp(3),
    paddingTop: heightToDp(3),
    paddingBottom: heightToDp(3),
  },
  btntxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Metropolis-Bold',
  },
});
export default Choice;
