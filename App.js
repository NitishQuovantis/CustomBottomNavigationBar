import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppStack from './navigation';
import BottomBarContext from './src/Contexts/BottomBarContext';
import SimpleBottomBar from './src/BottomBars/SimpleBottomBar';
import {BottomBarTabs} from './src/BottomBars/BottomBarConstants';
import NavigationService from './NavigationService';
import {UserType} from './src/Utils/Constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTabBarVisible: false,
      selectedIndex: BottomBarTabs.Dashboard,
      userType: UserType.Patient,
      showSummary: false,
    };
  }

  setUserType = (userType) => {
    this.setState({userType});
  };

  setSelectedIndex = (selectedIndex) => {
    this.setState({selectedIndex});
  };

  setTabBarVisibility = (isVisible) => {
    if (this.state.isTabBarVisible !== isVisible) {
      this.setState({isTabBarVisible: isVisible});
    }
  };

  setSummaryVisibility = (isVisible) => {
    this.setState({showSummary: isVisible});
  };

  render() {
    const {isTabBarVisible, selectedIndex} = this.state;

    return (
      <BottomBarContext.Provider
        value={{
          setVisibility: this.setTabBarVisibility,
          setSelectedIndex: this.setSelectedIndex,
          setUserType: this.setUserType,
          setSummaryVisibility: this.setSummaryVisibility,

          userType: this.state.userType,
          showSummary: this.state.showSummary,
        }}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <AppStack
              ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </View>

          <SimpleBottomBar
            isVisible={isTabBarVisible}
            selectedIndex={selectedIndex}
          />
        </View>
      </BottomBarContext.Provider>
    );
  }
}
