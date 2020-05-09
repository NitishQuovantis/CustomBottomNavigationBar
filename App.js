import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View, Text} from 'react-native';
import AppStack from './navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{backgroundColor: 'blue', flex: 1}}>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </View>
      </View>
    );
  }
}
