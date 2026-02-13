import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DashboardTemplate } from '../components/templates/DashboardTemplate';
import { DashboardHeader } from '../components/organisms/DashboardHeader';
import { BalanceCard } from '../components/molecules/BalanceCard';
import { StatsGrid } from '../components/organisms/StatsGrid';
import { QuickActionsRow } from '../components/organisms/QuickActionsRow';
import { AssetsList } from '../components/organisms/AssetsList';
import { AppText } from '../components/atoms/AppText';
import { dashboardStats, quickActions, assets } from '../data/dashboard';
import { spacing } from '../theme/spacing';
import { useResponsive } from '../utils/responsive';
import { DashboardStackParamList } from '../navigation/types';

export const DashboardScreen: React.FC = () => {
  const { isTablet, isLandscape } = useResponsive();
  const columns = isTablet || isLandscape ? 2 : 1;
  const navigation = useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  return (
    <DashboardTemplate header={<DashboardHeader userName="Victor" />}>
      <BalanceCard
        balance="$24,860.45"
        change="+4.2%"
        onDeposit={() => navigation.navigate('Deposit')}
        onWithdraw={() => navigation.navigate('Withdraw')}
      />

      <View style={styles.sectionHeader}>
        <AppText variant="headline">Overview</AppText>
        <AppText variant="caption">This week</AppText>
      </View>
      <StatsGrid stats={dashboardStats} columns={columns} />

      <View style={styles.sectionHeader}>
        <AppText variant="headline">Quick actions</AppText>
        <AppText variant="caption">Tap to start</AppText>
      </View>
      <QuickActionsRow actions={quickActions} />

      <AssetsList assets={assets} />
    </DashboardTemplate>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
});
