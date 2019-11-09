import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, UIManager, findNodeHandle, NativeModules } from 'react-native';
let RNSGViewSwift = requireNativeComponent('RNSGViewSwift');

class RNSGView extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.toggleGraphView();
    }, 50)
  }

  toggleGraphView = () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.viewRef),
      UIManager["RNSGViewSwift"].Commands.toggleGraphViewFromManager,
      []
    );
  }

  render() {
    const props = this.props;

    return <RNSGViewSwift ref={e => this.viewRef = e}  {...props} />;
  }
}

RNSGView.propTypes = {};

export default RNSGView;
