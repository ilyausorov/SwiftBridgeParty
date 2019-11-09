import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, UIManager, findNodeHandle, NativeModules } from 'react-native';
const RNCameraView = requireNativeComponent('RNCameraViewSwift', CameraView);

class CameraView extends React.Component {
  constructor(props) {
    super(props)

    this.toggleCameraBackground = this.toggleCameraBackground.bind(this);
    this.takeCameraSnapshot = this.takeCameraSnapshot.bind(this);
  };

  componentDidMount() {
    const { buttonMargins } = this.props;

    setTimeout(() => {
      this.toggleCameraBackground(buttonMargins);
    }, 50)
  }

  toggleCameraBackground = (buttonMargins) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.cameraViewRef),
      UIManager["RNCameraViewSwift"].Commands.toggleCameraFromManager,
      [buttonMargins]
    );
  }

  takeCameraSnapshot = async () => {
    const handle = findNodeHandle(this.cameraViewRef);
    try {
      const res = await NativeModules.RNCameraViewSwift.takeCameraSnapshotFromManager(handle);
      return res;
    } catch(e) {
      return e;
    }
  }

  render() {
    let { ...otherProps } = this.props;

    return <RNCameraView ref={e => this.cameraViewRef = e} {...otherProps} />;
  }
}

CameraView.propTypes = {};

export default CameraView;
