import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightToDp, widthToDp} from '../../utils/responsive';
import ImageUpload from '../../utils/ImageUpload';
import {useNavigation} from '@react-navigation/native';
import AddPropertyNav from './AddPropertyNav';
import AddProperties from './AddProperties';
import Button from './Button';
const AddingProperty2 = ({index, setIndex}) => {
  const [unfurnished, setUnfurnished] = useState('#FFFFFF');
  const [furnished, setFurnished] = useState('#FFFFFF');
  const [semiFurnished, setSemiFurnished] = useState('#FFFFFF');
  const [textunfurnished, setTextUnfurnished] = useState('black');
  const [textfurnished, setTextFurnished] = useState('black');
  const [textsemiFurnished, setTextSemiFurnished] = useState('black');
  const handleFurnishedType = type => {
    if (type == 'Furnished') {
      setFurnished('#FFA714');
      setTextFurnished('white');
      setSemiFurnished('#FFFFFF');
      setTextSemiFurnished('black');
      setUnfurnished('#FFFFFF');
      setTextUnfurnished('black');
    } else if (type == 'Unfurnished') {
      setUnfurnished('#FFA714');
      setTextUnfurnished('white');
      setSemiFurnished('#FFFFFF');
      setTextSemiFurnished('black');
      setFurnished('#FFFFFF');
      setTextFurnished('black');
    } else if (type == 'Semifurnished') {
      setSemiFurnished('#FFA714');
      setTextSemiFurnished('white');
      setFurnished('#FFFFFF');
      setTextFurnished('black');
      setFurnished('#FFFFFF');
      setTextFurnished('black');
      setUnfurnished('#FFFFFF');
      setTextUnfurnished('black');
    }
    setFinalState(prev => {
      return {
        ...prev,
        furniture: type,
      };
    });
  };

  const initialState = {
    price: '',
    isPriceNegoitable: '',
    pricePerSft: '',
    bedRoom: 1,
    bathRoom: 1,
    furniture: '',
    buildInYear: '',
    sizeArea: '',
    electrical: '',
  };

  const [finalState, setFinalState] = useState(initialState);
  useEffect(() => {
    handleFurnishedType(finalState.furniture);
  }, []);
  const handleBedRoom = type => {
    let bedroom;
    if (type == '+') {
      bedroom = finalState?.bedRoom + 1;
    } else if (type == '-') {
      bedroom = finalState?.bedRoom - 1;
    }
    setFinalState(prev => {
      return {
        ...prev,
        bedRoom: bedroom,
      };
    });
  };
  const handleBathRoom = type => {
    let bathroom;
    if (type == '+') {
      bathroom = finalState?.bathRoom + 1;
    } else if (type == '-') {
      bathroom = finalState?.bathRoom - 1;
    }
    setFinalState(prev => {
      return {
        ...prev,
        bathRoom: bathroom,
      };
    });
  };

  const handleSubmit = () => {
    /* if (
      finalState.buildInYear == '' ||
      finalState.sizeArea == '' ||
      finalState.electrical == '' ||
      finalState.pricePerSft == '' ||
      finalState.price == '' ||
      finalState.furniture == ''
    ) {
      Alert.alert('Please fill all the details');
    } else {*/
    console.log('porperty2', finalState);

    setIndex(prev => prev + 1);
    // }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{padding: heightToDp(3), paddingLeft: heightToDp(4)}}>
            <AddPropertyNav
              index={index}
              setIndex={setIndex}
              txt={'STEP 1 OF 5'}
            />
          </View>
          <AddProperties
            img={ImageUpload.homeround}
            title="Add Property"
            txt="Showcase your property to our agents listed on multiple pin codes for closing the deal quickly with a valid subscription."
          />
          <View
            style={{
              paddingTop: heightToDp(4),
              paddingLeft: heightToDp(4),
              padding: heightToDp(3),
            }}>
            <View style={styles.body}>
              <View style={{marginBottom: heightToDp(1)}}>
                <Text style={[styles.txt, {marginBottom: heightToDp(2)}]}>
                  Price
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Price"
                  inputMode="numeric"
                  value={finalState.price}
                  onChangeText={text =>
                    setFinalState(prev => {
                      return {
                        ...prev,
                        price: text,
                      };
                    })
                  }
                />
              </View>
              <View style={styles.line}></View>
              <View>
                <Text
                  style={[
                    styles.txt,
                    {marginBottom: heightToDp(4), marginTop: heightToDp(1)},
                  ]}>
                  Property Room
                </Text>
                <View style={styles.wrapperBox}>
                  <Text style={styles.new}>Bedroom</Text>
                  <View style={styles.smallBox}>
                    <TouchableOpacity onPress={() => handleBedRoom('-')}>
                      <Text style={styles.new}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.new}>{finalState?.bedRoom}</Text>
                    <TouchableOpacity onPress={() => handleBedRoom('+')}>
                      <Text style={styles.new}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.wrapperBox}>
                  <Text style={[styles.new]}>Bathroom</Text>
                  <View style={styles.smallBox}>
                    <TouchableOpacity onPress={() => handleBathRoom('-')}>
                      <Text style={styles.new}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.new}>{finalState?.bathRoom}</Text>
                    <TouchableOpacity onPress={() => handleBathRoom('+')}>
                      <Text style={styles.new}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.line}></View>
              <View style={{marginTop: heightToDp(1)}}>
                <Text style={[styles.txt]}>Furniture</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: heightToDp(3),
                  }}>
                  <TouchableOpacity
                    onPress={() => handleFurnishedType('Unfurnished')}
                    style={[styles.furniture, {backgroundColor: unfurnished}]}>
                    <Text
                      style={[
                        styles.txt,
                        {fontSize: 16, color: textunfurnished},
                      ]}>
                      Unfurnished
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleFurnishedType('Semifurnished')}
                    style={[
                      styles.furniture,
                      {
                        backgroundColor: semiFurnished,
                        marginLeft: heightToDp(1.5),
                        marginRight: heightToDp(1.5),
                      },
                    ]}>
                    <Text
                      style={[
                        styles.txt,
                        {fontSize: 16, color: textsemiFurnished},
                      ]}>
                      Semi Furnished
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleFurnishedType('Furnished')}
                    style={[styles.furniture, {backgroundColor: furnished}]}>
                    <Text
                      style={[
                        styles.txt,
                        {fontSize: 16, color: textfurnished},
                      ]}>
                      Furnished
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.built}>
                <Text style={[styles.txt, {fontSize: 20}]}>Built Year</Text>
                <TextInput
                  style={[
                    styles.heading,
                    {
                      width: widthToDp('20%'),
                    },
                  ]}
                  placeholder="000"
                  inputMode="numeric"
                  value={finalState.buildInYear}
                  onChangeText={text =>
                    setFinalState(prev => {
                      return {
                        ...prev,
                        buildInYear: text,
                      };
                    })
                  }></TextInput>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: heightToDp(8),
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginRight: widthToDp(5),
                  }}>
                  <Text style={[styles.txt, {marginBottom: heightToDp(2)}]}>
                    Size Area
                  </Text>
                  <View style={[styles.size]}>
                    <TextInput
                      style={[styles.txt, {fontSize: 14}]}
                      placeholder="1100"
                      inputMode="numeric"
                      value={finalState.sizeArea}
                      onChangeText={text =>
                        setFinalState(prev => {
                          return {
                            ...prev,
                            sizeArea: text,
                          };
                        })
                      }></TextInput>
                    <Text>sqft</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.txt, {marginBottom: heightToDp(2)}]}>
                    Electrical
                  </Text>
                  <View style={[styles.size]}>
                    <TextInput
                      style={[
                        styles.txt,
                        {fontSize: 14, width: widthToDp('20%')},
                      ]}
                      placeholder="200"
                      inputMode="numeric"
                      value={finalState.electrical}
                      onChangeText={text =>
                        setFinalState(prev => {
                          return {
                            ...prev,
                            electrical: text,
                          };
                        })
                      }></TextInput>
                    <Text>watt</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Button
                title={'Continue'}
                onPress={() => setIndex(prev => prev + 1)}
              />
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
  heading: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Metropolis-Bold',
  },

  line: {
    paddingBottom: heightToDp(2),
    marginBottom: heightToDp(2),
    borderBottomWidth: 2,
    borderColor: '#F1F1F1',
  },
  txt: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Metropolis-Medium',
  },
  list: {
    borderWidth: 2,
    padding: heightToDp(5),
    paddingLeft: heightToDp(10),
    paddingRight: heightToDp(10),
    backgroundColor: '#FFFFFF',
    margin: heightToDp(2),
  },
  input: {
    borderColor: '#F1F1F1',
    borderWidth: 2,
    marginBottom: heightToDp(1),
    paddingLeft: heightToDp(4),
  },
  wrapperBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightToDp(3),
  },
  smallBox: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#F1F1F1',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: widthToDp(25),
    borderRadius: widthToDp(2),
    paddingTop: heightToDp(1),
    paddingBottom: heightToDp(1),
  },
  furniture: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F1F1F1',
    borderWidth: 2,
    borderRadius: 2,
    padding: heightToDp(3),
  },
  built: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightToDp(3),
    marginBottom: heightToDp(3),
    paddingBottom: heightToDp(3),
    paddingTop: heightToDp(3),
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#F1F1F1',
  },
  size: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: heightToDp(1),
    borderColor: '#F1F1F1',
    width: widthToDp(35),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightToDp(3),
    paddingTop: heightToDp(1),
    borderTopWidth: 2,
    borderColor: '#F1F1F1',
    backgroundColor: '#FFFFFF',
  },
  new: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#000000',
  },
});
export default AddingProperty2;
