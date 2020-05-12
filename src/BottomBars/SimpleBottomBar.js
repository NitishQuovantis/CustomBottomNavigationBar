import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, Animated} from 'react-native';
import * as BottomBarConstant from './BottomBarConstants';
import Styles from './Styles';
import * as Icons from '../assets';
import BottomBarContext from '../Contexts/BottomBarContext';
import {ScreenName} from '../screens/ScreenConstant';
import {UserType} from '../Utils/Constants';
import NavigationService from '../../NavigationService';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

class SimpleBottomBar extends Component {
  static contextType = BottomBarContext;

  constructor(props) {
    super(props);

    this.state = {
      isVisible: this.props.isVisible,
      selectedIndex: this.props.selectedIndex,
      animated: new Animated.Value(this.props.isVisible ? 1 : 0),
    };
  }

  runAnimation = (toValue) => {
    Animated.timing(this.state.animated, {
      toValue,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible) {
      if (this.props.isVisible) {
        this.runAnimation(1);
      } else {
        this.runAnimation(0);
      }
    }
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({selectedIndex: this.props.selectedIndex});
    }
    if (this.context.userType !== this.state.userType) {
      this.setState({userType: this.context.userType});
    }
  }

  onDashboardClick = () => {
    NavigationService.navigate(ScreenName.Dashboard, {});
    this.context.setSelectedIndex(BottomBarConstant.BottomBarTabs.Dashboard);
  };

  onJourneyClick = () => {
    NavigationService.navigate(ScreenName.Journey, {});
    this.context.setSelectedIndex(BottomBarConstant.BottomBarTabs.Journey);
  };

  onVideoClick = () => {
    NavigationService.navigate(ScreenName.VideoCall, {});
    this.context.setSelectedIndex(BottomBarConstant.BottomBarTabs.Video);
  };

  onSummaryClick = () => {
    NavigationService.navigate(ScreenName.Summary, {});
    this.context.setSelectedIndex(BottomBarConstant.BottomBarTabs.Summary);
  };

  getBottomBarStyle = () => {
    const isPatient = this.context.userType === UserType.Patient;

    const heightInterpolation = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, isPatient ? BottomBarConstant.BottomBarHeight : 0],
    });

    return {
      height: heightInterpolation,
      backgroundColor: 'white',
    };
  };

  render() {
    const animatedBottomBarStyle = this.getBottomBarStyle();
    const {selectedIndex} = this.state;

    return (
      <React.Fragment>
        <Animated.View style={animatedBottomBarStyle}>
          <View style={Styles.tabBarStyle}>
            <Tabs
              title={'Dashboard'}
              icon={Icons.DashboardIcon}
              isSelected={
                selectedIndex === BottomBarConstant.BottomBarTabs.Dashboard
              }
              onClick={this.onDashboardClick}
            />

            <Tabs
              title={'Journey'}
              icon={Icons.JourneyIcon}
              isSelected={
                selectedIndex === BottomBarConstant.BottomBarTabs.Journey
              }
              onClick={this.onJourneyClick}
            />

            <Tabs
              title={'Video'}
              icon={Icons.VideoIcon}
              isSelected={
                selectedIndex === BottomBarConstant.BottomBarTabs.Video
              }
              onClick={this.onVideoClick}
            />

            {this.context.showSummary && (
              <Tabs
                title={'Summary'}
                icon={Icons.SummaryIcon}
                isSelected={
                  selectedIndex === BottomBarConstant.BottomBarTabs.Summary
                }
                onClick={this.onSummaryClick}
              />
            )}
          </View>
        </Animated.View>

        {/* This is basically our area of showing overflow menu. One of the main reason for implementing Custom Bottom Bar */}
        {this.props.isVisible && (
          <View style={Styles.emptyBoxStyle} pointerEvents="box-none">
            <TouchableOpacity></TouchableOpacity>
          </View>
        )}
      </React.Fragment>
    );
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: new Animated.Value(0),
    };
  }

  runAnimation = (toValue) => {
    Animated.timing(this.state.animated, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isSelected != this.props.isSelected) {
      if (this.props.isSelected) {
        this.runAnimation(1);
      } else {
        this.runAnimation(0);
      }
    }
  }

  getContainerAnimatingStyle = () => {
    const translation = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -4],
    });

    return {
      transform: [{translateY: translation}],
    };
  };

  getImageStyle = () => {
    const scaleInterpolation = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.1],
    });

    return {
      transform: [{scale: scaleInterpolation}],
    };
  };

  render() {
    const {title, icon, isSelected} = this.props;

    const textColor = isSelected ? 'red' : 'black';
    const imageTint = isSelected ? 'red' : null;

    const containerStyle = this.getContainerAnimatingStyle();
    const imageStyle = this.getImageStyle();

    return (
      <AnimatedTouchable
        style={[Styles.tabStyle, containerStyle]}
        onPress={this.props.onClick}>
        <Animated.Image
          source={icon}
          style={[Styles.tabIconStyle, {tintColor: imageTint}, imageStyle]}
        />
        <Text style={[Styles.tabTitleStyle, {color: textColor}]}>{title}</Text>
      </AnimatedTouchable>
    );
  }
}

export default SimpleBottomBar;
