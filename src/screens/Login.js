import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../utils/styles';
import {StackActions, useNavigation} from '@react-navigation/native';
import ImageUpload from '../utils/ImageUpload';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={[styles.containor, {backgroundColor: '#302D2D'}]}>
      <View
        style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 190, width: 190}}
          source={ImageUpload.Logo_black}></Image>
      </View>
      <View
        style={{
          flex: 0.75,

          borderTopLeftRadius: 70,
          backgroundColor: 'white',
        }}>
        <View style={styles.heading}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login Screen</Text>
        </View>
        <View style={{flex: 0.5, marginLeft: 15, padding: 15}}>
          <Text style={{fontSize: 18}}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={value => setEmail(value)}></TextInput>
          <Text style={{fontSize: 18}}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={value => setPassword(value)}></TextInput>
          <View style={{height: 45, width: '100%'}}>
            {message ? (
              <View
                style={{
                  margin: 3,
                  flexDirection: 'row',
                  borderWidth: 2,
                  borderColor: 'red',
                }}>
                <Text style={{color: 'red', fontSize: 14}}>{message}</Text>
              </View>
            ) : null}
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Choice');
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 150, width: '100%', justifyContent: 'center'}}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.navigate}>
              Don't have an account?
              <Text
                style={[
                  styles.navigate,
                  {fontStyle: 'italic', fontWeight: 'bold'},
                ]}>
                SignUp
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
