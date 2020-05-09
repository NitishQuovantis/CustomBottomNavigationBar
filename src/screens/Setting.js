import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './Styles';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.containerStyle}>
        <Text style={Styles.screenNameTextStyle}>Setting</Text>

        <Text style={Styles.screenNameTextStyle}>I also don't like tabbar</Text>

        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}
