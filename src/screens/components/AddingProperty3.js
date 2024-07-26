import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightToDp, widthToDp} from '../../utils/responsive';
import ImageUpload from '../../utils/ImageUpload';
import {useNavigation} from '@react-navigation/native';
import AddPropertyNav from './AddPropertyNav';
import AddProperties from './AddProperties';
import ImageHandler from './ImageHandler';

const AddingProperty3 = ({index, setIndex}) => {
  const handleImageSelection = async () => {
    try {
      const imagePath = await ImageHandler();
      setFinalState(prev => {
        return {
          ...prev,
          images: [...prev.images, imagePath],
        };
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const initialState = {
    images: [],
  };
  const [finalState, setFinalState] = useState(initialState);

  const handleSubmit = () => {
    setIndex(prev => prev + 1);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{padding: heightToDp(3), paddingLeft: heightToDp(4)}}>
            <AddPropertyNav
              index={index}
              setIndex={setIndex}
              txt={'STEP 4 OF 5'}
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
              padding: heightToDp(4),
            }}>
            <View style={styles.body}>
              <Text
                style={[
                  styles.txt,
                  {marginTop: heightToDp(2), marginBottom: heightToDp(4)},
                ]}>
                Upload Photos
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: widthToDp('100%'),
                  flexWrap: 'wrap',
                }}>
                {finalState?.images.length != 0 ? (
                  finalState?.images.map((item, index) => {
                    return (
                      <View key={index} style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginRight: widthToDp(4),
                            marginTop: heightToDp(4),
                          }}>
                          <Image style={styles.img} src={item} />
                        </View>
                        {index == finalState?.images.length - 1 ? (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: heightToDp(4),
                              height: heightToDp(25),
                              width: widthToDp(25),
                            }}>
                            <TouchableOpacity
                              onPress={() => handleImageSelection()}>
                              <Image
                                style={{
                                  height: heightToDp(5),
                                  width: widthToDp(5),
                                }}
                                source={ImageUpload.addimg}
                              />
                            </TouchableOpacity>
                          </View>
                        ) : null}
                      </View>
                    );
                  })
                ) : (
                  <View style={styles.box}>
                    <Image
                      style={{
                        height: heightToDp(8),
                        width: widthToDp(8),
                        marginBottom: heightToDp(3),
                        resizeMode: 'contain',
                      }}
                      source={ImageUpload.imgicon}
                    />
                    <Text>Upload Photo at least 4+</Text>
                    <TouchableOpacity
                      onPress={() => handleImageSelection()}
                      style={styles.btn}>
                      <Text
                        style={[styles.txt, {color: 'white', fontSize: 14}]}>
                        Upload Images
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            {finalState?.images.length != 0 ? (
              <View style={[styles.btn2]}>
                <Button
                  title={'Next Step'}
                  setIndex={setIndex}
                  checkProperty={true}
                  onPress={handleSubmit}
                />
              </View>
            ) : null}
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

  txt: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Inter-Medium',
  },
  box: {
    width: widthToDp('90%'),
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.15)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    height: heightToDp('50%'),
  },
  btn: {
    marginTop: heightToDp(3),
    backgroundColor: '#FFA714',
    borderWidth: 2,
    borderColor: '#FFA714',
    padding: heightToDp(3),
    borderRadius: widthToDp(2),
  },
  img: {
    height: heightToDp(25),
    width: widthToDp(25),
    borderRadius: widthToDp(3),
    aspectRatio: 1,
  },
  btn2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightToDp(5),
    marginBottom: heightToDp(2),
    paddingTop: heightToDp(1),
    borderTopWidth: 2,
    borderColor: '#F1F1F1',
    backgroundColor: '#FFFFFF',
  },
});
export default AddingProperty3;
