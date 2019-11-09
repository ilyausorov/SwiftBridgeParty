import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GraphScreen from '../screens/GraphScreen';
import GradientScreen from '../screens/GradientScreen';
import CameraScreen from '../screens/CameraScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';

const GraphScreenStack = createStackNavigator(
  {
    GraphScreen: GraphScreen,
  },
);

GraphScreenStack.navigationOptions = {
  tabBarLabel: 'Graph',
  tabBarIcon: ({ focused }) => (
    <Entypo
      focused={focused}
      name={'area-graph'}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
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
    <MaterialIcons
      focused={focused}
      name={'gradient'}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
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
    <Entypo
      focused={focused}
      name={'camera'}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

CameraScreenStack.path = '';

const tabNavigator = createBottomTabNavigator({
  GradientScreenStack,
  GraphScreenStack,
  CameraScreenStack,
}, {
  lazy: false,
  tabBarOptions: {
    showLabel: false
  }
});

tabNavigator.path = '';

export default tabNavigator;
