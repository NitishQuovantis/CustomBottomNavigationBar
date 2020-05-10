import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './Styles';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.containerStyle}>
        <Text style={Styles.screenNameTextStyle}>Summary</Text>

        <Text style={Styles.screenNameTextStyle}>
          I have your report card for your program and It is Gooooooood.
        </Text>

        <Button
          onPress={() => {
            this.props.navigation.goBack();
          }}
          title="Go Back"
        />
      </View>
    );
  }
}
