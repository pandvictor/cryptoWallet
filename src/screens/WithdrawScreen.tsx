import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenTemplate } from '../components/templates/ScreenTemplate';
import { Card } from '../components/atoms/Card';
import { AppText } from '../components/atoms/AppText';
import { AppButton } from '../components/atoms/AppButton';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const WithdrawScreen: React.FC = () => {
  return (
    <ScreenTemplate>
      <Card>
        <AppText variant="headline">Withdraw</AppText>
        <AppText variant="body" color={colors.textSecondary} style={styles.copy}>
          Transfer funds to your bank account. Confirm your destination before sending.
        </AppText>
        <View style={styles.row}>
          <AppText variant="label" color={colors.textMuted}>
            Destination
          </AppText>
          <AppText variant="subtitle">Chase **** 4382</AppText>
        </View>
        <View style={styles.row}>
          <AppText variant="label" color={colors.textMuted}>
            Amount
          </AppText>
          <AppText variant="subtitle">$850.00</AppText>
        </View>
        <AppButton label="Confirm withdraw" style={styles.button} />
      </Card>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  copy: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  row: {
    marginBottom: spacing.md,
  },
  button: {
    marginTop: spacing.sm,
  },
});
