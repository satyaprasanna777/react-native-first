import styled from 'styled-components/native';

const SigninMainContainer = styled.ScrollView`
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
`;

const SignupHeading = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const SubHeading = styled.Text`
  color: grey;
`;

const HorizontalLine = styled.View`
  border-bottom-color: black;
  border-bottom-width: 0.5px;
  margin: 10px 0px 10px 0px;
`;

const NameFields = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const Margin = styled.Text`
  width: 10px;
`;
const SelectGenderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: grey;
  margin-bottom: 10px;
`;

const SelectBranchContainer = styled.View`
  display: flex;
  flex-direction: row;
  color: grey;
  margin-bottom: 10px;
`;

const AddressContainer = styled.View`
  display: flex;
  flex-direction: row;
  color: grey;
  margin-bottom: 10px;
`;

const DateField = styled.View`
  display: flex;
  flex-direction: row;
  color: grey;
  margin-bottom: 10px;
`;

const TypingSpeedContainer = styled.View`
  display: flex;
  flex-direction: row;
  color: grey;
  margin-bottom: 10px;
`;

const AcceptTermsContainer = styled.View`
  display: flex;
  flex-direction: row;
  color: grey;
  margin-bottom: 10px;
`;

export {
  SignupHeading,
  SigninMainContainer,
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
};
