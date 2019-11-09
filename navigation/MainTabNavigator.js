import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const ScreenOneStack = createStackNavigator(
  {
    ScreenOne: ScreenOne,
  },
);

ScreenOneStack.navigationOptions = {
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

ScreenOneStack.path = '';

const ScreenTwoStack = createStackNavigator(
  {
    ScreenTwo: ScreenTwo,
  }
);

ScreenTwoStack.navigationOptions = {
  tabBarLabel: 'Gradient',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

ScreenTwoStack.path = '';

const ScreenThreeStack = createStackNavigator(
  {
    ScreenThree: ScreenThree,
  }
);

ScreenThreeStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ScreenThreeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ScreenOneStack,
  ScreenTwoStack,
  ScreenThreeStack,
});

tabNavigator.path = '';

export default tabNavigator;
