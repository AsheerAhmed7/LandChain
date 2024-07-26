import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/responsive';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        onPress();
      }}>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D3D3D',
    borderWidth: 2,
    borderColor: '#3D3D3D',
    width: widthToDp('80%'),
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    height: heightToDp(10),
    marginTop: heightToDp(5),
  },
});
export default Button;
