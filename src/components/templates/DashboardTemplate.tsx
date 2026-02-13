import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';
import { useResponsive } from '../../utils/responsive';

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export const DashboardTemplate: React.FC<Props> = ({ header, children }) => {
  const { contentMaxWidth, horizontalPadding } = useResponsive();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingHorizontal: horizontalPadding },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.content, { maxWidth: contentMaxWidth }]}>
          {header}
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingTop: 12,
    paddingBottom: 32,
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
});
