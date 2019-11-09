import React, { useEffect } from 'react';
import { View, Image, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const splashImage = require('../assets/images/splash.png');
const { width, height } = Dimensions.get('window');

export default function ExtendedLoadingScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={() => {
          StatusBar.setBarStyle('light-content')
          setTimeout(() => {
            navigation.navigate('Main');
          }, 2500)

        }}
      />
      <Image style={{flex: 1, width: width, height: height}} resizeMode={'contain'} source={splashImage} />
    </View>
  );
}

ExtendedLoadingScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
