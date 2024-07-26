import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AddingProperty2 from './components/AddingProperty2';
import AddingProperty3 from './components/AddingProperty3';
import AddingProperty4 from './components/AddingProperty4';

const AddingProperties = () => {
  const [index, setIndex] = useState(1);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView keyboardShouldPersistTaps="handled" style={{flex: 1}}>
        <View style={{flex: 1}}>
          {index == 1 ? (
            <AddingProperty2 index={index} setIndex={setIndex} />
          ) : index == 2 ? (
            <AddingProperty3 index={index} setIndex={setIndex} />
          ) : index == 3 ? (
            <AddingProperty4 index={index} setIndex={setIndex} />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddingProperties;
