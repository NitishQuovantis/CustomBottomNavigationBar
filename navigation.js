import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Dashboard from './src/screens/Dashboard';
import WeightDetail from './src/screens/WeightDetail';
import BodyMeasurementDetail from './src/screens/BodyMeasurementDetail';
import AddWeight from './src/screens/AddWeight';
import AddBodyMeasurement from './src/screens/AddBodyMeasurement';
import FoodList from './src/screens/FoodList';
import Setting from './src/screens/Setting';
import Journey from './src/screens/Journey';
import Summary from './src/screens/Summary';
import VideoCall from './src/screens/VideoCall';
import {ScreenName} from './src/screens/ScreenConstant';

import {TabbarDisabledHOC} from './src/Hocs/TabbarDisabledHOC';
import {TabbarEnabledHOC} from './src/Hocs/TabbarEnabledHOC';

import {BottomBarTabs} from './src/BottomBars/BottomBarConstants';

const Stack = createStackNavigator(
  {
    [ScreenName.Dashboard]: TabbarEnabledHOC(
      Dashboard,
      BottomBarTabs.Dashboard,
    ),
    [ScreenName.WeightDetail]: TabbarEnabledHOC(
      WeightDetail,
      BottomBarTabs.Dashboard,
    ),
    [ScreenName.BodyMeasurementDetail]: TabbarEnabledHOC(
      BodyMeasurementDetail,
      BottomBarTabs.Dashboard,
    ),
    [ScreenName.AddWeight]: TabbarDisabledHOC(AddWeight),
    [ScreenName.AddBodyMeasurement]: TabbarDisabledHOC(AddBodyMeasurement),
    [ScreenName.FoodList]: TabbarDisabledHOC(FoodList),
    [ScreenName.Setting]: TabbarDisabledHOC(Setting),
    [ScreenName.Journey]: TabbarEnabledHOC(Journey, BottomBarTabs.Journey),
    [ScreenName.Summary]: TabbarEnabledHOC(Summary, BottomBarTabs.Summary),
    [ScreenName.VideoCall]: TabbarDisabledHOC(VideoCall, BottomBarTabs.Video),
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(Stack);
