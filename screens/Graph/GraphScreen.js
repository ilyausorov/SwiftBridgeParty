import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
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
        left: 10,
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
            }} key={id} style={{paddingVertical: 5}}>
            <Text>{name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default function GraphScreen() {
  const [graphType, setGraphType] = useState('createSimpleGraph');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const setters = {
    setGraphType,
    setBackgroundColor
  };

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View>
        <ChartSwitcher {...setters} />
        <RNSGView style={{ height: height - 170, width: width}} graphType={graphType} />
      </View>
    </View>
  );
}

GraphScreen.navigationOptions = {
  headerTitle: 'Trippy',
};
