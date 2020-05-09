import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './Styles';

export default class AddWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.containerStyle}>
        <Text style={Styles.screenNameTextStyle}>AddWeight</Text>

        <Text style={Styles.screenNameTextStyle}>I don't like tabbar</Text>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
