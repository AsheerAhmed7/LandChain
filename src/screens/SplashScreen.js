import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import ImageUpload from '../utils/ImageUpload';
import {heightToDp, widthToDp} from '../utils/responsive';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{height: heightToDp('70%'), width: widthToDp('70%')}}
        source={ImageUpload.logo}
      />
    </View>
  );
};

export default SplashScreen;
