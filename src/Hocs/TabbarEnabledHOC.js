import React from 'react';
import {withNavigation} from 'react-navigation';
import BottomBarContext from '../Contexts/BottomBarContext';

export function TabbarEnabledHOC(WrappedComponent, selectedTab) {
  const TabBarEnabledComponent = class extends React.Component {
    static contextType = BottomBarContext;

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.focusListener = this.props.navigation.addListener(
        'willFocus',
        this.handleFocusListener,
      );
    }

    componentWillUnmount() {
      this.focusListener.remove();
    }

    handleFocusListener = () => {
      this.context.setSelectedIndex(selectedTab);
      this.context.setVisibility(true);
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return withNavigation(TabBarEnabledComponent);
}
