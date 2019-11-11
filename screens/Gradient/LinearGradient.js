import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, processColor } from 'react-native';
const RNLinearGradient = requireNativeComponent('RNLinearGradientSwift', LinearGradient);

class LinearGradient extends React.Component {
  render() {
    let { colors, ...otherProps } = this.props;
    let processedColors = colors.map((color) => processColor(color));
    return <RNLinearGradient {...otherProps} colors={processedColors} />;
  }
}

LinearGradient.propTypes = {
  colors: PropTypes.array.isRequired,
  locations: PropTypes.array,
}

export default LinearGradient;
