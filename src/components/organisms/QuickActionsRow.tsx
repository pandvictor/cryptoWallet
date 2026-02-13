import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { QuickAction } from '../molecules/QuickAction';
import { spacing } from '../../theme/spacing';

export type QuickActionItem = {
  label: string;
  iconLabel: string;
};

type Props = {
  actions: QuickActionItem[];
};

export const QuickActionsRow: React.FC<Props> = ({ actions }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {actions.map((action, index) => (
          <View key={action.label} style={index === actions.length - 1 ? null : styles.item}>
            <QuickAction label={action.label} iconLabel={action.iconLabel} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  scrollContent: {
    paddingVertical: spacing.sm,
  },
  item: {
    marginRight: spacing.sm,
  },
});
