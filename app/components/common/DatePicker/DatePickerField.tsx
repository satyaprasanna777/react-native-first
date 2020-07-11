import React from 'react';
import DatePicker from 'react-native-datepicker';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
@observer
class DatePickerField extends React.Component {
  @observable date: any;
  constructor(props) {
    super(props);
    this.date = '2020-07-11';
  }
  onDateChange = (date: any) => {
    this.date = date;
  };
  render() {
    return (
      <DatePicker
        style={{width: 200}}
        date={this.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2020-06-01"
        maxDate="2020-09-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date: any) => {
          this.onDateChange(date);
        }}
      />
    );
  }
}

export {DatePickerField};
