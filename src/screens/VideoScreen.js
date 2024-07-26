import React from 'react';
import {View, TouchableOpacity, StyleSheet, Alert, Text} from 'react-native';
import Video from 'react-native-video';
import {heightToDp, widthToDp} from '../utils/responsive';
import ImageUpload from '../utils/ImageUpload';
import {useNavigation} from '@react-navigation/native';

const VideoScreen = () => {
  const handleVideoPress = videoNumber => {
    Alert.alert(`Video ${videoNumber} pressed!`);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={ImageUpload.video1}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
          paused={false}
        />
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnTxt}>My Properties</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoContainer}>
        <Video
          source={ImageUpload.video2}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
          paused={false}
        />
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => navigation.navigate('AddingProperties')}>
          <Text style={styles.btnTxt}>List a Property</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoContainer: {
    width: widthToDp('100%'),
    height: heightToDp('100%'),
    marginBottom: heightToDp(1),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: widthToDp('90%'),
    height: heightToDp('90%'),
  },
  btnStyle: {
    position: 'absolute',
    backgroundColor: 'black',
    height: heightToDp(10),
    width: widthToDp(50),
    borderWidth: 2,
    borderRadius: heightToDp(2),
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: heightToDp(10),
  },
  btnTxt: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default VideoScreen;
