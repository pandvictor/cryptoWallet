import React from 'react';
import { View, StyleSheet, ViewProps, Platform } from 'react-native';
import { colors } from '../../theme/colors';

export const Card: React.FC<ViewProps> = ({ style, ...props }) => {
  return <View {...props} style={[styles.base, style]} />;
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 12,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
