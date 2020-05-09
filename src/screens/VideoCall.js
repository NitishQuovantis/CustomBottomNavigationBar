import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './Styles';

export default class VideoCall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.containerStyle}>
        <Text style={Styles.screenNameTextStyle}>VideoCall</Text>

        <Button
          onPress={() => {
            this.props.navigation.navigate('Screen2');
          }}
          title="Move to screen 2"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate('Screen3');
          }}
          title="Move to screen 3"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate('Screen4');
          }}
          title="Move to screen 4"
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate('Screen5');
          }}
          title="Move to screen 5"
        />
      </View>
    );
  }
}
