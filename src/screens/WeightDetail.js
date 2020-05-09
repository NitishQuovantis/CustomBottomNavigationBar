import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './Styles';
import {ScreenName} from './ScreenConstant';

export default class WeightDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.containerStyle}>
        <Text style={Styles.screenNameTextStyle}>Weight Detail</Text>

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.AddWeight);
          }}
          title="Move to Add Weight"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate(ScreenName.Journey);
          }}
          title="Move to Journey"
        />
      </View>
    );
  }
}
