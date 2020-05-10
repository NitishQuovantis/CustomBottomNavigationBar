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

        <Text style={Styles.screenNameTextStyle}>
          I don't like tabbar just faces
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
