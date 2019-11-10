import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import LinearGradient from './LinearGradient';
import { NavigationEvents } from 'react-navigation';

const gradients = [
  {
    id: 1,
    name: "Alihossein",
    colors: ['#f7ff00', '#db36a4'],
    locations: [0, 1.0],
  },
  {
    id: 2,
    name: "MegaTron",
    colors: ['#C6FFDD', '#FBD786', '#f7797d'],
    locations: [0, .4, 1.0],
  },
  {
    id: 3,
    name: "Yoda",
    colors: ['#FF0099', '#493240'],
    locations: [0, 1.0],
  },
  {
    id: 4,
    name: "Day Blues",
    colors: ['#40E0D0', '#FF8C00', '#FF0080'],
    locations: [0, .7, 1.0],
  },
  {
    id: 5,
    name: "Hazel",
    colors: ['#77A1D3', '#79CBCA', '#E684AE'],
    locations: [0, .5, 1.0],
  },
  {
    id: 6,
    name: "Royal Blue Petrol",
    colors: ['#BBD2C5', '#536976', '#292E49'],
    locations: [0, .4, 1.0],
  },
];

const GradientSwitcher = ({ setGradient }) => {
  return (
    <View style={{
        position: 'absolute',
        top: 10,
        left: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        zIndex: 1,
    }}>
      {gradients.map(gradient => {
        const { colors, locations, id, name } = gradient;
        return (
          <TouchableOpacity onPress={() => {
              setGradient(gradient);
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

  return (
    <View style={styles.container}>
      <GradientSwitcher {...setters} />
      <LinearGradient
         style={{flex: 1}}
         {...gradient}
       />
    </View>
  );
}

GradientScreen.navigationOptions = {
  headerTitle: 'Light Show',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
