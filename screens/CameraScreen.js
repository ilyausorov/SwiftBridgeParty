import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');

import CameraView from './CameraView';

export default function ScreenThree() {
  const [imageURL, setImageURL] = useState('');

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
              <Text style={{fontSize: 25, color: 'white'}}>x</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <CameraView
            ref={e => this.cameraViewRef = e}
            style={{width: width, height: height}}
            buttonMargins={{
              top: 10,
              left: 20,
              right: 20,
              bottom: 10
            }}
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
                this.cameraViewRef.takeCameraSnapshot()
                  .then(result => setImageURL(result))
              }}
            / >
          </View>
        </>
      )}
    </View>
  );
}

ScreenThree.navigationOptions = {
  title: 'Camera View',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
