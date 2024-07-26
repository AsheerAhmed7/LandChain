import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightToDp, widthToDp} from '../../utils/responsive';
import ImageUpload from '../../utils/ImageUpload';
import {StackActions, useNavigation} from '@react-navigation/native';
import AddPropertyNav from './AddPropertyNav';
import AddProperties from './AddProperties';
const fields = [
  {
    title: 'Title your listing',
    placeholder:
      'Enter Title                                                                       0 OF 35',
  },
  {
    title: 'Description',
    placeholder:
      'Enter Description                                                       0 0F 1000',
  },
];
const AddingProperty4 = ({index, setIndex}) => {
  const navigation = useNavigation();

  const initialState = {
    titleYourListing: '',
    description: '',
    brokerCommission: '',
  };
  const [finalState, setFinalState] = useState(initialState);
  const handleInput = (text, title) => {
    console.log('title', title, 'text', text);
    if (title == 'Title your listing') {
      setFinalState(prev => {
        return {
          ...prev,
          titleYourListing: text,
        };
      });
    } else if (title == 'Description') {
      setFinalState(prev => {
        return {
          ...prev,
          description: text,
        };
      });
    } else if (title == 'Broker Comission') {
      setFinalState(prev => {
        return {
          ...prev,
          brokerCommission: text,
        };
      });
    }
  };

  const callAddProperty = async () => {
    if (
      finalState.brokerCommission == '' ||
      finalState.description == '' ||
      finalState.titleYourListing == ''
    ) {
      Alert.alert('Please fill all the details');
    } else {
      dispatch({type: USER_PROPERTY_STATE, payload: finalState});

      let postData = {
        ...data,
        ...finalState,
      };
      console.log('postData', postData);

      setTimeout(() => {
        navigation.dispatch(StackActions.replace('PreviewListing'));
      }, 3000);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{padding: heightToDp(3), paddingLeft: heightToDp(4)}}>
            <AddPropertyNav
              index={index}
              setIndex={setIndex}
              txt={'STEP 5 OF 5'}
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
            <View style={{marginTop: heightToDp(4)}}>
              {fields.map((item, index) => (
                <View key={index} style={{marginBottom: heightToDp(4)}}>
                  <Text style={styles.txt}>{item.title}</Text>
                  <TextInput
                    value={
                      item.title == 'Title your listing'
                        ? finalState.titleYourListing
                        : item.title == 'Description'
                        ? finalState.description
                        : finalState.brokerCommission
                    }
                    multiline={item.title == 'Description' ? true : false}
                    inputMode={
                      item.title == 'Broker Comission' ? 'numeric' : 'none'
                    }
                    style={styles.input}
                    placeholder={item.placeholder}
                    onChangeText={text => handleInput(text, item.title)}
                  />
                </View>
              ))}
            </View>
            <View style={styles.btn}>
              <Button
                title={'Next'}
                onPress={() => {
                  callAddProperty();
                }}></Button>
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

  txt: {
    fontSize: 20,

    color: '#000000',
    fontFamily: 'Metropolis-Medium',
  },
  box: {
    padding: heightToDp(3),
    width: widthToDp('45%'),
    borderRadius: widthToDp(2),
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: heightToDp(2),
    borderBottomWidth: 2,
    borderColor: '#F1F1F1',
    width: widthToDp('90%'),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightToDp(51),
    backgroundColor: '#FFFFFF',
    paddingTop: heightToDp(1),
    borderTopWidth: 2,
    borderColor: '#F1F1F1',
  },
});
export default AddingProperty4;
