import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../atoms/AppText';
import { IconCircle } from '../atoms/IconCircle';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export type AssetRowProps = {
  name: string;
  symbol: string;
  balance: string;
  price: string;
  change: string;
  changePositive?: boolean;
};

export const AssetRow: React.FC<AssetRowProps> = ({
  name,
  symbol,
  balance,
  price,
  change,
  changePositive = true,
}) => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <IconCircle label={symbol[0]} size={42} backgroundColor={colors.surfaceAlt} />
        <View style={styles.nameWrap}>
          <AppText variant="subtitle">{name}</AppText>
          <AppText variant="caption" color={colors.textSecondary}>
            {symbol}
          </AppText>
        </View>
      </View>
      <View style={styles.right}>
        <AppText variant="subtitle">{balance}</AppText>
        <AppText variant="caption" color={colors.textSecondary}>
          {price}
        </AppText>
        <AppText
          variant="caption"
          color={changePositive ? colors.accent : colors.danger}
          style={styles.change}
        >
          {change}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameWrap: {
    marginLeft: spacing.sm,
  },
  right: {
    alignItems: 'flex-end',
  },
  change: {
    marginTop: 2,
  },
});
