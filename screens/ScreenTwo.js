import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function ScreenTwo() {
  return (
    <ScrollView style={styles.container}>
      <Text>Hello</Text>
    </ScrollView>
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
