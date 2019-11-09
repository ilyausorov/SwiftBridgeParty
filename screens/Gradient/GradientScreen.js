import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import LinearGradient from './LinearGradient';
import { NavigationEvents } from 'react-navigation';

const gradients = [
  {
    id: 1,
    name: "Alihossein",
    colors: ['#f7ff00', '#db36a4'],
    locations: [0, 1.0],
    statusBar: 'dark-content',
  },
  {
    id: 2,
    name: "MegaTron",
    colors: ['#C6FFDD', '#FBD786', '#f7797d'],
    locations: [0, .4, 1.0],
    statusBar: 'dark-content',
  },
  {
    id: 3,
    name: "Yoda",
    colors: ['#FF0099', '#493240'],
    locations: [0, 1.0],
    statusBar: 'light-content',
  },
  {
    id: 4,
    name: "Day Blues",
    colors: ['#40E0D0', '#FF8C00', '#FF0080'],
    locations: [0, .7, 1.0],
    statusBar: 'light-content',
  },
  {
    id: 5,
    name: "Hazel",
    colors: ['#77A1D3', '#79CBCA', '#E684AE'],
    locations: [0, .5, 1.0],
    statusBar: 'light-content',
  },
  {
    id: 6,
    name: "Royal Blue Petrol",
    colors: ['#BBD2C5', '#536976', '#292E49'],
    locations: [0, .4, 1.0],
    statusBar: 'dark-content',
  },
];

const GradientSwitcher = ({ setGradient }) => {
  return (
    <View style={{
        position: 'absolute',
        top: 50,
        left: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        zIndex: 1,
    }}>
      {gradients.map(gradient => {
        const { colors, locations, id, name, statusBar } = gradient;
        return (
          <TouchableOpacity onPress={() => {
              setGradient(gradient);
              StatusBar.setBarStyle(statusBar);
            }} key={id} style={{paddingVertical: 5}}>
            <Text>{name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default function GradientScreen() {
  const [gradient, setGradient] = useState(gradients[0]);
  const setters = {
    setGradient
  };

  useEffect(() => {
    setTimeout(() => {
      StatusBar.setBarStyle('dark-content');
    }, 100)
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={() => {
          StatusBar.setBarStyle(gradient.statusBar);
        }}
      />
      <GradientSwitcher {...setters} />
      <LinearGradient
         style={{flex: 1}}
         {...gradient}
       />
    </View>
  );
}

GradientScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
