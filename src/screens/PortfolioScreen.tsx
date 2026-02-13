import React from 'react';
import { StyleSheet } from 'react-native';
import { ScreenTemplate } from '../components/templates/ScreenTemplate';
import { Card } from '../components/atoms/Card';
import { AppText } from '../components/atoms/AppText';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const PortfolioScreen: React.FC = () => {
  return (
    <ScreenTemplate>
      <Card>
        <AppText variant="headline">Portfolio</AppText>
        <AppText variant="body" color={colors.textSecondary} style={styles.copy}>
          Track allocation, performance, and goals from one place.
        </AppText>
      </Card>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  copy: {
    marginTop: spacing.sm,
  },
});
