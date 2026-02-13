import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenTemplate } from '../components/templates/ScreenTemplate';
import { Card } from '../components/atoms/Card';
import { AppText } from '../components/atoms/AppText';
import { AppButton } from '../components/atoms/AppButton';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const DepositScreen: React.FC = () => {
  return (
    <ScreenTemplate>
      <Card>
        <AppText variant="headline">Deposit</AppText>
        <AppText variant="body" color={colors.textSecondary} style={styles.copy}>
          Add funds to your wallet using bank transfer or a linked card.
        </AppText>
        <View style={styles.row}>
          <AppText variant="label" color={colors.textMuted}>
            Method
          </AppText>
          <AppText variant="subtitle">Bank transfer</AppText>
        </View>
        <View style={styles.row}>
          <AppText variant="label" color={colors.textMuted}>
            Amount
          </AppText>
          <AppText variant="subtitle">$1,500.00</AppText>
        </View>
        <AppButton label="Confirm deposit" style={styles.button} />
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
