import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, UIManager, findNodeHandle, NativeModules } from 'react-native';
const RNIBAViewSwift = requireNativeComponent('RNIBAViewSwift');

class RNInputBarAccessoryView extends React.Component {
  render() {
    const { props } = this;
    return <RNIBAViewSwift ref={e => this.viewRef = e}  {...props} />;
  }
}

RNInputBarAccessoryView.propTypes = {
  onUpdate: PropTypes.func,
  onTextChange: PropTypes.func,
  onHeightChange: PropTypes.func,
};

export default RNInputBarAccessoryView;
