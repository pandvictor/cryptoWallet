import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../atoms/AppText';
import { IconCircle } from '../atoms/IconCircle';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

type Props = {
  label: string;
  iconLabel: string;
  onPress?: () => void;
};

export const QuickAction: React.FC<Props> = ({ label, iconLabel, onPress }) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.base, pressed && styles.pressed]}
      hitSlop={8}
    >
      <IconCircle label={iconLabel} size={46} backgroundColor={colors.surfaceAlt} />
      <View style={styles.labelWrap}>
        <AppText variant="subtitle" color={colors.textPrimary}>
          {label}
        </AppText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    minWidth: 120,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderRadius: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  labelWrap: {
    marginTop: spacing.sm,
  },
  pressed: {
    opacity: 0.85,
  },
});
