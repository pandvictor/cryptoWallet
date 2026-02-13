import { Platform } from 'react-native';

export const typography = {
  fontFamilyRegular: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  fontFamilyMedium: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  fontFamilySemibold: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
};
