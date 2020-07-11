import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {View} from 'react-native';

type RadioButtonTypes = {
  radioProps: Array<object>;
};

class RadioButtonEle extends React.Component<RadioButtonTypes> {
  getInitialState() {
    return {
      value: 0,
    };
  }
  render() {
    const {radioProps} = this.props;
    return (
      <View>
        <RadioForm
          radio_props={radioProps}
          initial={0}
          onPress={(value: any) => {
            this.setState({value: value});
          }}
          formHorizontal={true}
          buttonSize={10}
          buttonColor={'grey'}
        />
      </View>
    );
  }
}

export {RadioButtonEle};
