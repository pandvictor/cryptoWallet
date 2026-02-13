import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../atoms/AppText';
import { AssetRow, AssetRowProps } from '../molecules/AssetRow';
import { Divider } from '../atoms/Divider';
import { Card } from '../atoms/Card';
import { spacing } from '../../theme/spacing';

export type AssetsListProps = {
  assets: AssetRowProps[];
};

export const AssetsList: React.FC<AssetsListProps> = ({ assets }) => {
  return (
    <Card style={styles.container}>
      <View style={styles.header}>
        <AppText variant="headline">Assets</AppText>
        <AppText variant="caption">Updated just now</AppText>
      </View>
      {assets.map((asset, index) => (
        <View key={asset.symbol}>
          <AssetRow {...asset} />
          {index !== assets.length - 1 ? <Divider /> : null}
        </View>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    marginBottom: spacing.xxl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
});
