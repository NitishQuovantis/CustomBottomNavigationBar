import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="WeightDetail" component={WeightDetail} />
      <Stack.Screen
        name="BodyMeasurementDetail"
        component={BodyMeasurementDetail}
      />
      <Stack.Screen name="AddWeight" component={AddWeight} />
      <Stack.Screen name="AddBodyMeasurement" component={AddBodyMeasurement} />
      <Stack.Screen name="FoodList" component={FoodList} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Journey" component={Journey} />
      <Stack.Screen name="Summary" component={Summary} />
      <Stack.Screen name="Screen10" component={VideoCall} />
    </Stack.Navigator>
  );
}
