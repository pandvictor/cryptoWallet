import React from 'react';
import { Pressable, StyleSheet, ViewStyle, Platform } from 'react-native';
import { AppText } from './AppText';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  style?: ViewStyle;
};

export const AppButton: React.FC<Props> = ({
  label,
  onPress,
  variant = 'primary',
  style,
}) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      android_ripple={variant === 'ghost' ? undefined : { color: 'rgba(255,255,255,0.2)' }}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style,
      ]}
      hitSlop={8}
    >
      <AppText
        variant="subtitle"
        color={variant === 'secondary' ? colors.primary : colors.surface}
      >
        {label}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    minHeight: 44,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: colors.primary,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  secondary: {
    backgroundColor: colors.surfaceAlt,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.85,
  },
});
