import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import LinearGradient from './LinearGradient';

export default function ScreenTwo() {
  return (
    <View style={styles.container}>
      <LinearGradient
         style={{flex: 1}}
         locations={[0, .5, 1.0]}
         colors={['#5ED2A0', 'blue', '#339CB1']}
       />
    </View>
  );
}

ScreenTwo.navigationOptions = {
  title: 'Gradient View',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
