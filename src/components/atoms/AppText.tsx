import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export type TextVariant =
  | 'title'
  | 'headline'
  | 'subtitle'
  | 'body'
  | 'label'
  | 'caption';

type Props = TextProps & {
  variant?: TextVariant;
  color?: string;
};

export const AppText: React.FC<Props> = ({
  variant = 'body',
  color = colors.textPrimary,
  style,
  ...props
}) => {
  return <Text {...props} style={[styles.base, styles[variant], { color }, style]} />;
};

const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamilyRegular,
    color: colors.textPrimary,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
  },
  headline: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
});
