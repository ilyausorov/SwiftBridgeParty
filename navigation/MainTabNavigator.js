import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GraphScreen from '../screens/GraphScreen';
import GradientScreen from '../screens/GradientScreen';
import CameraScreen from '../screens/CameraScreen';

const GraphScreenStack = createStackNavigator(
  {
    GraphScreen: GraphScreen,
  },
);

GraphScreenStack.navigationOptions = {
  tabBarLabel: 'Graph',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

GraphScreenStack.path = '';

const GradientScreenStack = createStackNavigator(
  {
    GradientScreen: GradientScreen,
  }
);

GradientScreenStack.navigationOptions = {
  tabBarLabel: 'Gradient',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

GradientScreenStack.path = '';

const CameraScreenStack = createStackNavigator(
  {
    CameraScreen: CameraScreen,
  }
);

CameraScreenStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

CameraScreenStack.path = '';

const tabNavigator = createBottomTabNavigator({
  GraphScreenStack,
  GradientScreenStack,
  CameraScreenStack,
});

tabNavigator.path = '';

export default tabNavigator;
