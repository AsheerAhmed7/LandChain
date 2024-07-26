import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
} from 'react-native';
import {heightToDp, widthToDp} from '../utils/responsive';
import Navbar from './components/NavBar';
import Card from './components/Card';
import AddProperties from './components/AddProperties';
import ImageUpload from '../utils/ImageUpload';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              padding: heightToDp(3),
              paddingBottom: heightToDp(4),
              paddingLeft: heightToDp(4),
              backgroundColor: '#F8F9FD',
            }}>
            <Navbar text="Find a Thousand Properties" text2="For Sale & Rent" />
          </View>
          <AddProperties
            img={ImageUpload.homeround}
            title="Add Properties"
            txt="Please add your properties and showcase them to more brokers. Your
          property listed for free will be shown to the brokers listed on the
          same Pincode. Subscribe to showcase your property for more brokers."
          />

          <View
            style={{
              paddingTop: heightToDp(4),
              paddingLeft: heightToDp(4),
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: heightToDp(2),
                marginRight: heightToDp(3),
              }}></View>
            <View
              style={{marginTop: heightToDp(3), marginRight: heightToDp(3)}}>
              <View>
                <Card />
                <Card />
                <Card />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: heightToDp('30%'),
    width: widthToDp('90%'),
    borderRadius: widthToDp('5%'),
    marginBottom: heightToDp(3),
  },
  heading: {
    color: '#000000',
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 16,
    fontSize: 20,
    marginBottom: heightToDp(5),
  },
});
export default Home;
