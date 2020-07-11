import React from 'react';
import {observable} from 'mobx';
import {
  Text,
  View,
  TextInput,
  Slider,
  CheckBox,
  Button,
  Alert,
} from 'react-native';
import {TextInputElement} from '../../components/common/TextInputElement/TextInputElement';
import {
  SigninMainContainer,
  SignupHeading,
  SubHeading,
  HorizontalLine,
  NameFields,
  Margin,
  SelectGenderContainer,
  SelectBranchContainer,
  AddressContainer,
  DateField,
  TypingSpeedContainer,
  AcceptTermsContainer,
} from './styledComponents';
import {RadioButtonEle} from '../../components/common/RadioButton/RadioButton';
import {SelectElement} from '../../components/common/SelectElement/SelectElement';
import {DatePickerField} from '../../components/common/DatePicker/DatePickerField';
import {observer} from 'mobx-react';

@observer
class SigninScene extends React.Component {
  @observable firstName: string;
  @observable lastName: string;
  @observable mobileNumber: string;
  @observable email: string;
  @observable password: string;
  @observable confirmPassword: string;
  @observable checked: boolean;

  constructor(props: Readonly<{}>) {
    super(props);
    this.firstName = '';
    this.lastName = '';
    this.checked = false;
    this.mobileNumber = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  onChangeFirstName = (text: string) => {
    this.firstName = text;
  };

  onChangeLastName = (text: string) => {
    this.lastName = text;
  };

  onChangeMobileNumber = (text: string) => {
    this.mobileNumber = text;
  };

  onChangeEmail = (text: string) => {
    this.email = text;
  };

  onChangePassword = (text: string) => {
    this.password = text;
  };

  onChangeConfirmPassword = (text: string) => {
    this.confirmPassword = text;
  };

  isChecked = () => {
    this.checked = !this.checked;
  };

  onPressSignup = () => {
    if (
      this.firstName === '' ||
      this.lastName === '' ||
      this.mobileNumber === '' ||
      this.email === '' ||
      this.password === '' ||
      this.confirmPassword === ''
    ) {
      Alert.alert('please fill all the required fields');
    }
  };

  render() {
    return (
      <SigninMainContainer>
        <SignupHeading>Sign Up</SignupHeading>
        <SubHeading>Please fill in this form to create an account</SubHeading>
        <HorizontalLine />
        <NameFields>
          <TextInputElement
            placeholder="First Name"
            onChangeText={text => this.onChangeFirstName(text)}
          />
          <Margin />
          <TextInputElement
            placeholder="Last Name"
            onChangeText={text => this.onChangeLastName(text)}
          />
        </NameFields>
        <TextInputElement
          placeholder="Mobile Number"
          onChangeText={text => this.onChangeMobileNumber(text)}
        />
        <TextInputElement
          placeholder="Email"
          onChangeText={text => this.onChangeEmail(text)}
        />
        <TextInputElement
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={text => this.onChangePassword(text)}
        />
        <TextInputElement
          secureTextEntry={true}
          placeholder="Confirm Password"
          onChangeText={text => this.onChangeConfirmPassword(text)}
        />
        <SelectGenderContainer>
          <Text>Select your gender</Text>
          <RadioButtonEle
            radioProps={[
              {label: 'Male', value: 0},
              {label: 'Female', value: 1},
              {label: 'Other', value: 2},
            ]}
          />
        </SelectGenderContainer>
        <SelectBranchContainer>
          <Text style={{marginRight: 30, width: 80}}>Select your branch</Text>
          <SelectElement />
        </SelectBranchContainer>
        <DateField>
          <Text style={{marginRight: 30, width: 80}}>DOB</Text>
          <DatePickerField />
        </DateField>
        <AddressContainer>
          <Text style={{marginRight: 30, width: 80}}>Enter your address</Text>
          <TextInput
            multiline={true}
            style={{height: 80, borderWidth: 1, flex: 1}}
            placeholder="Type your address here!..."
          />
        </AddressContainer>
        <TypingSpeedContainer>
          <Text style={{marginRight: 30, width: 80}}>
            Set your typing speed
          </Text>
          <Slider style={{flex: 1}} />
        </TypingSpeedContainer>
        <AcceptTermsContainer>
          <CheckBox value={this.checked} onValueChange={this.isChecked} />
          <Text style={{marginTop: 5}}>
            I accept the Terms of use & Privacy policy
          </Text>
        </AcceptTermsContainer>
        <View
          style={{
            marginBottom: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Button title="Sign Up" onPress={this.onPressSignup} />
        </View>
      </SigninMainContainer>
    );
  }
}

export {SigninScene};
