import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, KeyboardAvoidingView, Dimensions, FlatList, SafeAreaView, Keyboard } from 'react-native';

import InputBarAccessoryView from './InputBarAccessoryView';
import { NavigationEvents } from 'react-navigation';
const { width, height } = Dimensions.get('window');
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'

const renderComment = ({item, index}) => {
  return (
    <View style={{marginTop: 10, paddingHorizontal: 20}}>
      <Text>#{index + 1}: {item.comment}</Text>
    </View>
  )
}

const renderHeader = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingTop: 20}}>
      <Text style={{fontSize: 18}}>Comments:</Text>
    </View>
  )
}

const renderEmpty = () => {
  return (
    <View style={{marginTop: 10, paddingHorizontal: 20}}>
      <Text>No comments.</Text>
    </View>
  )
}

export default function InputBarScreen() {

  useEffect(() => {
    setTimeout(() => {
      StatusBar.setBarStyle('dark-content');
    }, 100)
  }, [])

  let flatListRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [inputHeight, setInputHeight] = useState(50);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents
        onWillFocus={() => {
          StatusBar.setBarStyle('dark-content');
        }}
      />

      <KeyboardAwareFlatList
        data={comments}
        renderItem={renderComment}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        keyExtractor={item => item.id}
        keyboardDismissMode="none"
        onKeyboardWillShow={() => {
          flatListRef.current && flatListRef.current.props.scrollToEnd(true);
          setKeyboardOpen(true);
        }}
        onKeyboardWillHide={() => {
          setKeyboardOpen(false);
        }}
        innerRef={(ref) => flatListRef.current = ref}
        contentContainerStyle={{paddingBottom: keyboardOpen ? 0 : inputHeight + 30}}
      />

      <KeyboardAvoidingView behavior="position" style={{position: 'absolute', bottom: 0}}>
        <InputBarAccessoryView
          onTextChange={(e) => null}
          onHeightChange={(e) => {
            const { size } = e.nativeEvent;
            setInputHeight(size);
          }}
          onSubmit={(e) => {
            const { text } = e.nativeEvent;
            comments.push({id: (comments.length + 1).toString(), comment: text});
            const newComments = [];
            comments.map((comment) => newComments.push(comment));
            setComments(newComments);

            setTimeout(() => {
              flatListRef.current && flatListRef.current.props.scrollToEnd(true)
            }, 150);
          }}
          style={{width: width, height: inputHeight}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

InputBarScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
