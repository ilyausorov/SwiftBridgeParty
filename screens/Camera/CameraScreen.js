import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
import { NavigationEvents } from 'react-navigation';

import CameraView from './CameraView';

export default function CameraScreen() {
  const [imageURL, setImageURL] = useState('');
  let cameraViewRef = useRef(null);

  return (
    <View style={styles.container}>
      {imageURL ? (
        <>
          <Image source={{uri: imageURL}} style={{width: width, height: height}} />
          <View style={{position: 'absolute', top: 20, left: 0, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                height: 60,
                width: 60
              }}
              onPress={() => {
                setImageURL('')
              }}
            >
              <AntDesign
                name={'closecircle'}
                size={26}
                style={{ marginBottom: -3 }}
                color={Colors.tabIconDefault}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <CameraView
            ref={e => cameraViewRef = e}
            style={{width: width, height: height}}
            buttonMargins={{top: 20, left: 10, right: 10, bottom: 10}}
          />

        <View style={{position: 'absolute', bottom: 20, justifyContent: 'center', alignItems: 'center', left: 0, right: 0}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                height: 60,
                width: 60,
                borderRadius: 60,
                borderWidth: 5,
                padding: 0,
                borderColor: 'white',
              }}
              onPress={() => {
                this.cameraViewRef.current.takeCameraSnapshot()
                  .then(result => setImageURL(result))
              }}
            / >
          </View>
        </>
      )}
    </View>
  );
}

CameraScreen.navigationOptions = {
  headerTitle: 'Selfie Time',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
