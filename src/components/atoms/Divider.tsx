import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { colors } from '../../theme/colors';

export const Divider: React.FC<ViewProps> = ({ style, ...props }) => {
  return <View {...props} style={[styles.base, style]} />;
};

const styles = StyleSheet.create({
  base: {
    height: 1,
    backgroundColor: colors.border,
    width: '100%',
  },
});
