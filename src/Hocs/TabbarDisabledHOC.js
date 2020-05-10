import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BottomBarContext from './../Contexts/BottomBarContext';
import {withNavigation} from 'react-navigation';

export function TabbarDisabledHOC(WrappedComponent) {
  const TabBarEnabledComponent = class extends Component {
    static contextType = BottomBarContext;

    componentDidMount() {
      this.listener = this.props.navigation.addListener(
        'willFocus',
        this.handleFocusListener,
      );
    }

    componentWillUnmount() {
      this.listener.remove();
    }

    handleFocusListener = () => {
      console.log('removing bottom bar', WrappedComponent.name);

      this.context.setVisibility(false);
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return withNavigation(TabBarEnabledComponent);
}
