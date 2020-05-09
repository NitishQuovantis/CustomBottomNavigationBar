import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './Styles';
import {ScreenName} from './ScreenConstant';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.containerStyle}>
        <Text style={Styles.screenNameTextStyle}>Dashboard</Text>

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
      </View>
    );
  }
}
