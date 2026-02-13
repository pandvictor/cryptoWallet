import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from '../atoms/Card';
import { AppText } from '../atoms/AppText';
import { AppButton } from '../atoms/AppButton';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export type BalanceCardProps = {
  balance: string;
  change: string;
  changePositive?: boolean;
  onDeposit?: () => void;
  onWithdraw?: () => void;
};

export const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  change,
  changePositive = true,
  onDeposit,
  onWithdraw,
}) => {
  return (
    <Card style={styles.card}>
      <AppText variant="label" color={colors.textMuted}>
        Balance total
      </AppText>
      <AppText variant="title" style={styles.balance}>
        {balance}
      </AppText>
      <View style={styles.changeRow}>
        <View
          style={[
            styles.changePill,
            { backgroundColor: changePositive ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)' },
          ]}
        >
          <AppText
            variant="caption"
            color={changePositive ? colors.accent : colors.danger}
          >
            {change}
          </AppText>
        </View>
        <AppText variant="caption" color={colors.textSecondary}>
          vs. last week
        </AppText>
      </View>
      <View style={styles.actions}>
        <AppButton
          label="Deposit"
          onPress={onDeposit}
          style={[styles.actionButton, styles.actionButtonSpacer]}
        />
        <AppButton
          label="Withdraw"
          variant="secondary"
          onPress={onWithdraw}
          style={styles.actionButton}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: spacing.xl,
  },
  balance: {
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  changePill: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 999,
    marginRight: spacing.sm,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
  },
  actionButtonSpacer: {
    marginRight: spacing.sm,
  },
});
