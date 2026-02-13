import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { AppText } from './AppText';
import { colors } from '../../theme/colors';

type Props = ViewProps & {
  label: string;
  size?: number;
  backgroundColor?: string;
};

export const IconCircle: React.FC<Props> = ({
  label,
  size = 44,
  backgroundColor = colors.surfaceAlt,
  style,
  ...props
}) => {
  return (
    <View
      {...props}
      style={[
        styles.base,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        style,
      ]}
    >
      <AppText variant="subtitle" color={colors.primaryDark}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
