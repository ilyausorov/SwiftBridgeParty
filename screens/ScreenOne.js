import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ScreenOne() {
  return (
    <View style={styles.container}>
      <Text>One</Text>
    </View>
  );
}

ScreenOne.navigationOptions = {
  title: 'Scrollable Graph View'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
