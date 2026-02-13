import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatCard, StatCardProps } from '../molecules/StatCard';
import { spacing } from '../../theme/spacing';

export type StatsGridProps = {
  stats: StatCardProps[];
  columns: number;
};

export const StatsGrid: React.FC<StatsGridProps> = ({ stats, columns }) => {
  return (
    <View style={styles.container}>
      {stats.map((stat, index) => {
        const isEnd = (index + 1) % columns === 0;
        return (
          <View
            key={stat.title}
            style={[
              styles.item,
              { width: `${100 / columns}%`, paddingRight: isEnd ? 0 : spacing.sm },
            ]}
          >
            <StatCard {...stat} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.xl,
  },
  item: {
    marginBottom: spacing.sm,
  },
});
