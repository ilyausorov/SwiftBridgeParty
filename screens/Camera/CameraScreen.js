import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
const { width, height } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
import { NavigationEvents } from 'react-navigation';
import CameraRoll from "@react-native-community/cameraroll";

import CameraView from './CameraView';

export default function CameraScreen() {
  const [imageURL, setImageURL] = useState('');
  let cameraViewRef = useRef(null);

  return (
    <View style={styles.container}>
      {imageURL ? (
        <React.Fragment>
          <Image source={{uri: imageURL}} style={{width: width, height: height}} />
          <View style={{position: 'absolute', top: 0, left: 0, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                height: 60,
                width: 60
              }}
              onPress={() => setImageURL('')}
            >
              <AntDesign
                name={'closecircle'}
                size={26}
                style={{ marginBottom: -3 }}
                color={Colors.tabIconDefault}
              />
            </TouchableOpacity>
          </View>
          <View style={{position: 'absolute', bottom: 20, justifyContent: 'center', alignItems: 'center', left: 0, right: 0}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  height: 60,
                  width: 150,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={async() => {
                  let savedURI = await CameraRoll.saveToCameraRoll(imageURL)
                  if(savedURI) {
                    Alert.alert('Saved!')
                  }
                }}
              >
                <Text style={{color: 'white', fontSize: 24}}>Save</Text>
              </TouchableOpacity>
            </View>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CameraView
            ref={e => cameraViewRef.current = e}
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
                cameraViewRef.current.takeCameraSnapshot()
                  .then(result => setImageURL(result))
              }}
            / >
          </View>
        </React.Fragment>
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
