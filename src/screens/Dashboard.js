import React, {Component} from 'react';
import {SafeAreaView, Text, Button, ScrollView} from 'react-native';
import Styles from './Styles';
import {ScreenName} from './ScreenConstant';
import BottomBarContext from '../Contexts/BottomBarContext';
import {UserType} from '../Utils/Constants';

export default class Dashboard extends Component {
  static contextType = BottomBarContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const isPatient = this.context.userType === UserType.Patient;
    const showSummary = this.context.showSummary;

    return (
      <ScrollView>
        <SafeAreaView />

        <Text style={Styles.screenNameTextStyle}>Dashboard</Text>

        <Button
          title={isPatient ? 'Change user to Admin' : 'Change user to Patient'}
          onPress={() => {
            if (isPatient) {
              this.context.setUserType(UserType.Admin);
            } else {
              this.context.setUserType(UserType.Patient);
            }
          }}
        />

        <Button
          title={showSummary ? 'Hide Summary' : 'Show Summary'}
          onPress={() => {
            this.context.setSummaryVisibility(!showSummary);
          }}
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.WeightDetail);
          }}
          title="Move to Weight Detail"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.BodyMeasurementDetail);
          }}
          title="Move to Body Measurement Detail"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.AddWeight);
          }}
          title="Move to Add Weight"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.AddBodyMeasurement);
          }}
          title="Move to Add Body Measurement"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.FoodList);
          }}
          title="Move to Food List"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.Setting);
          }}
          title="Move to Setting Screen"
        />
      </ScrollView>
    );
  }
}
