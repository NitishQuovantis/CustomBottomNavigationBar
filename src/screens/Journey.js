import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './Styles';

export default class Journey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.containerStyle}>
        <Text style={Styles.screenNameTextStyle}>Journey</Text>

        <Text style={Styles.screenNameTextStyle}>
          I have really cool animation and interaction.
        </Text>

        <Button
          title={'Go back (when not from tabbar)'}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}
