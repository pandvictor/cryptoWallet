import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isTablet = width >= 768;

  return {
    width,
    height,
    isLandscape,
    isTablet,
    contentMaxWidth: isTablet ? 720 : width,
    horizontalPadding: isTablet ? 24 : 16,
  };
};
