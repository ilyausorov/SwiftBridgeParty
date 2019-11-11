import React, { useEffect } from 'react';
import { View, Image, StatusBar, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const splashImage = require('../assets/images/splash_2.png');
const { width, height } = Dimensions.get('window');

export default function ExtendedLoadingScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={() => {
          StatusBar.setBarStyle('dark-content');
        }}
      />
      <Image style={{flex: 1, width: width, height: height}} resizeMode={'cover'} source={splashImage} />
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{position: 'absolute', bottom: 50, alignSelf: 'center', width: 240, height: 90, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>LET'S PARTY</Text>
      </TouchableOpacity>

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
