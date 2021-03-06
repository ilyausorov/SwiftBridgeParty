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
    const node = findNodeHandle(this.cameraViewRef);
    try {
      const res = await NativeModules.RNCameraViewSwift.takeCameraSnapshotFromManager(node);
      return res;
    } catch(e) {
      return e;
    }
  }

  render() {
    let { props } = this;
    return <RNCameraView ref={e => this.cameraViewRef = e} {...props} />;
  }
}

CameraView.propTypes = {
  buttonMargins: PropTypes.object,
};

export default CameraView;
