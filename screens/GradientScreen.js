import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import LinearGradient from './LinearGradient';
import { NavigationEvents } from 'react-navigation';

export default function ScreenTwo() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={() => {
          StatusBar.setBarStyle('light-content');
        }}
      />
      <LinearGradient
         style={{flex: 1}}
         locations={[0, .5, 1.0]}
         colors={['#5ED2A0', 'blue', '#339CB1']}
       />
    </View>
  );
}

ScreenTwo.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
