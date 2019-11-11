import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ExtendedLoadingScreen from './ExtendedLoadingScreen';

export default createAppContainer(
  createSwitchNavigator({
    ExtendedLoading: ExtendedLoadingScreen,
    Main: MainTabNavigator,
  })
);
