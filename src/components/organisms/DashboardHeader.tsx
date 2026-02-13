import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../atoms/AppText';
import { IconCircle } from '../atoms/IconCircle';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

type Props = {
  userName: string;
};

export const DashboardHeader: React.FC<Props> = ({ userName }) => {
  return (
    <View style={styles.container}>
      <View>
        <AppText variant="label" color={colors.textMuted}>
          Welcome back
        </AppText>
        <AppText variant="headline">{userName}</AppText>
      </View>
      <View style={styles.actions}>
        <IconCircle label="N" size={44} backgroundColor={colors.surfaceAlt} />
        <View style={styles.actionSpacer} />
        <IconCircle label={userName[0]} size={44} backgroundColor={colors.surfaceAlt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionSpacer: {
    width: spacing.sm,
  },
});
