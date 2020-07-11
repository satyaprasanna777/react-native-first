import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

type TextInputElementTypes = {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
};

class TextInputElement extends React.Component<TextInputElementTypes> {
  render() {
    const {placeholder, secureTextEntry, onChangeText} = this.props;
    return (
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    );
  }
}

export {TextInputElement};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'lightgrey',
    borderRadius: 3,
    flex: 1,
    marginBottom: 10,
  },
});
