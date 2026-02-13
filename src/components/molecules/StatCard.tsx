import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from '../atoms/Card';
import { AppText } from '../atoms/AppText';
import { colors } from '../../theme/colors';

export type StatCardProps = {
  title: string;
  value: string;
  caption?: string;
};

export const StatCard: React.FC<StatCardProps> = ({ title, value, caption }) => {
  return (
    <Card style={styles.card}>
      <AppText variant="label" color={colors.textMuted}>
        {title}
      </AppText>
      <AppText variant="headline" style={styles.value}>
        {value}
      </AppText>
      {caption ? (
        <AppText variant="caption" color={colors.textSecondary}>
          {caption}
        </AppText>
      ) : null}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  value: {
    marginTop: 6,
    marginBottom: 2,
  },
});
