import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const SelectElement = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{height: 30, width: 100}}
        onValueChange={itemValue => setSelectedValue(itemValue)}>
        <Picker.Item label="CSE" value="CSE" />
        <Picker.Item label="ECE" value="ECE" />
        <Picker.Item label="EEE" value="ECE" />
        <Picker.Item label="Civil" value="ECE" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export {SelectElement};
