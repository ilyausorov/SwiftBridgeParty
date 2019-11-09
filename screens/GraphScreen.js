import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

import RNSGView from './ScrollableGraphView';
const { width, height } = Dimensions.get('window');

const graphTypes = [
  {
    id: 1,
    name: "Simple Graph",
    graphType: "createSimpleGraph",
    backgroundColor: 'white',
  },
  {
    id: 2,
    name: "Multi Plot Graph - 1",
    graphType: "createMultiPlotGraphOne",
    backgroundColor: '#333333',
  },
  {
    id: 3,
    name: "Multi Plot Graph - 2",
    graphType: "createMultiPlotGraphTwo",
    backgroundColor: '#333333',
  },
  {
    id: 4,
    name: "Dark Graph",
    graphType: "createDarkGraph",
    backgroundColor: '#333333',
  },
  {
    id: 5,
    name: "Bar Graph",
    graphType: "createBarGraph",
    backgroundColor: '#333333',
  },
  {
    id: 6,
    name: "Dot Graph",
    graphType: "createDotGraph",
    backgroundColor: '#00BFFF',
  },
  {
    id: 7,
    name: "Pink Graph",
    graphType: "createPinkGraph",
    backgroundColor: '#333333',
  },
  {
    id: 8,
    name: "Blue Orange Graph",
    graphType: "createBlueOrangeGraph",
    backgroundColor: 'white',
  },
];

const ChartSwitcher = ({ setBackgroundColor, setGraphType }) => {
  return (
    <View style={{
        position: 'absolute',
        top: 10,
        left: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        zIndex: 1,
    }}>
      {graphTypes.map(type => {
        const { graphType, backgroundColor, id, name } = type;
        return (
          <TouchableOpacity onPress={() => {
              setBackgroundColor(backgroundColor);
              setGraphType(graphType);
              if(backgroundColor === 'white') {
                StatusBar.setBarStyle('dark-content');
              } else {
                StatusBar.setBarStyle('light-content');
              }
            }} key={id} style={{paddingVertical: 5}}>
            <Text>{name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default function ScreenOne() {
  const [graphType, setGraphType] = useState('createSimpleGraph');
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, [])

  const setters = {
    setGraphType,
    setBackgroundColor
  };

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <NavigationEvents
        onWillFocus={() => {
          if(backgroundColor === 'white') {
            StatusBar.setBarStyle('dark-content');
          } else {
            StatusBar.setBarStyle('light-content');
          }
        }}
      />
      <View style={{ marginTop: 40 }}>
        <ChartSwitcher {...setters} />
        <RNSGView style={{ height: height - 120}} graphType={graphType} />
      </View>
    </View>
  );
}

ScreenOne.navigationOptions = {
  header: null,
};
